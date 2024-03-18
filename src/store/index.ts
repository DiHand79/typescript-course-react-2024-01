import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { usersReducer } from "./usersSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: { counter: counterReducer, users: usersReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
