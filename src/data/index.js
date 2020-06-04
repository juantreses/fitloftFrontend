import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import authReducer from "./auth";

export default createStore(
  combineReducers({ auth: authReducer }),
  applyMiddleware(thunk, logger)
);
