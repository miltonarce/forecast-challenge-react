import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import foreCastReducer from "./reducers/foreCastReducer";

export default createStore(
  combineReducers({
    forecast: foreCastReducer,
  }),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk)
  )
);
