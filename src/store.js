import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// what store takes in first
const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // compose allows you to have multiple arguments here
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
