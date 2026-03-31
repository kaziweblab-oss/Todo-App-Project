import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "../todos/reducers/reducers";
import { massegeReducer } from "../massage/reducers/reducer";

const rootReducer = combineReducers({ todoReducer, massegeReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
