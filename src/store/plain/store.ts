import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import appReducer from "./reducers";

const logger = createLogger();

const store = createStore(appReducer, applyMiddleware(logger));

export default store;