import { decrement, increment, reset } from "../constants/counterConsttant";

const initialCount = { count: 0 };
const counterReducer = (state = initialCount, action: any) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case reset:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
