import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";

const combineCompose = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const logger = (state) => (next) => (action) => next(action)

export const store = createStore(
  reducer,
  combineCompose(applyMiddleware(logger))
);
