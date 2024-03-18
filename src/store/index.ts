import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./counterSlice";
import { IUser } from "../types";
import { usersReducer } from "./usersSlice";
import { thunk } from "redux-thunk";

export interface IState {
  counter: { value: number };
  users: IUser[];
}

const store = createStore(
  combineReducers({ counter: counterReducer, users: usersReducer }),
  applyMiddleware(thunk)
);

export default store;
