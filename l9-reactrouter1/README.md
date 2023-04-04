# Redux

### 1. What is redux?

A small JS library. for managing medium/large amount of states globally in our app.

React-redux : redux is used wih some common packages such as react-redux

redux-toolkit : recommended way to write redux logic for building redux app easily and avoiding mistakes.

View -> `Action`(is a object. type and payload) -> `Reducers`(is a purefunction. based on action type, write logic ) -> `Store` define state dispatch an action Reducer update state based on Action Type. Store will update the `view`.

### 2. what is actions?

`actions` are object that carries what actions to perform. Actions are the only source of information for the store.

### 3. what is reducers?

`reducer` is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.

### 4. what is store?

A `store` is a state container which holds the application's state. Redux can have only a single store in your application.

### 5. what is Slice in redux?

A Redux `Slice` is a collection of reducer logic and actions

### how to create slice using createSlice in redux toolkit?

### how to create store using configureStore in redux toolkit?

### how to connect react with redux using react-redux?

### how to use useSelector to access state in redux

### how to use useDispatch to dispatch actions

### create a counter app using redux toolkit

---

### What is extraReducer?

The `reducers` property both creates an action creator function and responds to that action in the slice reducer. The `extraReducers` allows you to respond to an action in your slice reducer but does not create an action creator function.

You will use reducers most of the time.

You would use `extraReducers` when you are dealing with an action that you have already defined somewhere else. The most common examples are responding to a `createAsyncThunk` action and responding to an action from another slice.

### Difference between reducer and extra reducer

### createAsyncThunk

createAsyncThunk will generate three Redux action creators using createAction : pending , fulfilled , and rejected . Each lifecycle action creator will be attached to the returned thunk action creator so that your reducer logic can reference the action types and respond to the actions when dispatched.

Credit 👉 [Rajesh Gole](https://youtube.com/InputOutputCampus)
