import { counterActions } from "./actions";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case counterActions.INCREMENT:
      return { counter: state.counter + 1 };
    case counterActions.DECREMENT:
      return { counter: state.counter - 1 };
    case counterActions.INCREMENT_BY_AMOUNT:
      return { counter: state.counter + action.payload };
    case counterActions.REPLACE_BY_NUMBER:
      return { counter: Number.isNaN(action.payload) ? 0 : action.payload };
    default:
      return state;
  }
};
