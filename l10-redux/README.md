# Redux

1. What is Redux?
   A small JS library.
   for managing medium/large amount of states globally in our app.

2. React-redux : redux is used wih some common packages such as react-redux
3. redux-toolkit : recommended way to write redux logic for building redux app easily and avoiding mistakes.

View -> Action(is a object. tpe and payload) -> Reducers(is a purefunction. based on action type, write logic ) -> Store
define state
dispatch an action
Reducer update state based on Action Type.
Store will update the view.

---

### 1. state

### 2. action

### 3. reducer

### 4. store

create store (`npm install redux`)

```
import { createStore } from "redux";
import counterReducer from "./redux/reducers/counterReducer";

const store = createStore(counterReducer);
export default store;

```

### 5. how to use redux on react

`npm install react-redux`

We have created store, now we can provide store to react by using `Provider` in parent component
