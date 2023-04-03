import { createStore } from "redux";
import counterReducer from "./redux/reducers/counterReducer";

const store = createStore(counterReducer);
export default store;
