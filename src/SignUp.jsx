import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, replaceByNumber } from "./redux/counterSlice";
import store from "./store";

const CountReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "replace":
      return action.payload;
    default:
      return state;
  }
};

const SignUp = () => {
  const [value, toggleValue] = useReducer((value) => !value, false);
  const [count, dispatchCountAction] = useReducer(CountReducer, 0);

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const counter = store.getState().counter;
      if(counter % 2 === 0) {
        alert("Counter is even");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Wrapper bgcolor="rgb(229,231,235)">
      <MainContainer>
        <HeroImage src="/hero.jpg" alt="hero" />
        <FormContainer>
          <Heading>
            Don't miss the opportunity,
            <br />
            Join the club now.
          </Heading>
          <CustomInput
            name="FullName"
            placeholder="Full Name"
            value={counter}
            onChange={(e) => {
              // dispatchCountAction({type: "replace", payload: parseInt(e.target.value)})
              store.dispatch(replaceByNumber(parseInt(e.target.value)));
            }}
          />
          {/* <CustomInput name="PhoneNumber" placeholder="Phone Number" />
          <CustomInput name="Email" placeholder="Email" />
          <CustomInput
            name="Password"
            placeholder="Password"
            isFieldTextHidden={false}
          />
          <CustomInput
            name="PasswordConfirmation"
            placeholder="Password Confirmation"
            isFieldTextHidden
          />
          <input
            type="checkbox"
            name="terms"
            checked={value}
            onChange={toggleValue}
          /> */}
          <p>{count}</p>
          <button
            onClick={() => {
              // dispatchCountAction({ type: "increment" });
              store.dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              // dispatchCountAction({ type: "decrement" })
              store.dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <JoinNowButton>Join Now</JoinNowButton>
        </FormContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default SignUp;

export const Wrapper = styled.div`
  // styled.div<{bgcolor: string}>
  min-height: 100vh;
  display: flex;
  justify-content: stretch;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
  padding: 24px;
`;

const MainContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  flex: 1 1 0%;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 0.5rem;
  background-image: linear-gradient(to left, #e9d5ff, #fff);
  background-color: #ddd6fe;
  background-color: #ffffff;
`;

const HeroImage = styled.img`
  width: 25%;
`;

const FormContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  text-align: center;
  color: #2563eb;
`;

const StylizedCustomInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  background-color: #ffffff;

  & > input {
    padding: 1rem;
    border-radius: 0.375rem;
    width: 100%;
    color: #374151;
    background-color: #ffffff;
  }
  & > img {
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
  }
`;

const CustomInput = ({
  name,
  placeholder,
  isFieldTextHidden,
  ...inputProps
}) => {
  return (
    <StylizedCustomInput>
      <input name={name} placeholder={placeholder} {...inputProps} />
      {isFieldTextHidden === undefined ? null : !!isFieldTextHidden ? (
        <img src="./view.png" alt="View Password" />
      ) : (
        <img src="./hide.png" alt="Hide Password" />
      )}
    </StylizedCustomInput>
  );
};

const JoinNowButton = styled.button`
  padding: 1rem;
  border-radius: 0.375rem;
  width: 50%;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #dc2626;
`;
