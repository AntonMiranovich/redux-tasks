import { createSlice } from "@reduxjs/toolkit";

const couter1 = createSlice({
  name: "couter1",
  initialState: 0,
  reducers: {
    increment: function (state) {
      return state + 1;
    },
  },
});

export const { increment } = couter1.actions;
export default couter1.reducer;
