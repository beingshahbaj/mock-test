import { createStore } from "redux";
import birdReducer from "./BirdReducer";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  bird: birdReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
