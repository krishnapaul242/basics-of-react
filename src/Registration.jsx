import React from "react";
import { Wrapper } from "./SignUp";

const Registration = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-stretch items-stretch p-6">
      <div className="flex flex-row justify-between items-stretch flex-1 bg-gradient-to-l from-purple-200 to-white overflow-hidden rounded-lg">
        <img src="/hero.jpg" className="w-1/4" alt="hero" />
        <div className="w-3/4 flex flex-col justify-start items-center py-8 gap-4">
          <h2 className="text-blue-600 text-3xl font-bold text-center mb-6">
            Don't miss the opportunity,
            <br />
            Join the club now.
          </h2>
          <CustomInput name="FullName" placeholder="Full Name" />
          <CustomInput name="PhoneNumber" placeholder="Phone Number" />
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
          <JoinNowButton />
        </div>
      </div>
    </div>
  );
};

export default Registration;

export const CustomInput = ({ name, placeholder, isFieldTextHidden, className }) => {
  const inputClassNames = "bg-white p-4 rounded-md text-gray-700 w-full".split(
    " "
  );
  if (!!isFieldTextHidden) {
    inputClassNames.push("border-orange-500");
  }
  // inputClassNames.push(className)
  const iconClassNames = "w-4 h-4 mr-4".split(" ");
  return (
    <div className={`bg-white w-1/2 flex flex-row items-center justify-stretch ${className}`}>
      <input
        name={name}
        placeholder={placeholder}
        className={inputClassNames.join(" ")}
      />
      {isFieldTextHidden === undefined ? null : !!isFieldTextHidden ? (
        <img
          src="./view.png"
          className={iconClassNames.join(" ")}
          alt="View Password"
        />
      ) : (
        <img
          src="./hide.png"
          className={iconClassNames.join(" ")}
          alt="Hide Password"
        />
      )}
    </div>
  );
};

const JoinNowButton = () => {
  return (
    <button className="bg-red-600 text-white p-4 rounded-md font-semibold text-lg w-1/2">
      Join Now
    </button>
  );
};
