import { createSlice } from "@reduxjs/toolkit";

const couter2 = createSlice({
  name: "couter2",
  initialState: 0,
  reducers: {
    increment: function (state) {
      return state + 1;
    },
    decrement: function (state) {
      return state - 1;
    },
  },
});

export const { increment, decrement } = couter2.actions;
export default couter2.reducer;
