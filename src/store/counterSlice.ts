import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const slice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const CounterSelector = (state: RootState) => state.counter.value;
export const { increment: incrementAction } = slice.actions;
export default slice.reducer;
