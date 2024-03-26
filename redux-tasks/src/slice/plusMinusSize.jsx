import { createSlice } from "@reduxjs/toolkit";

const plusMinusSize = createSlice({
  name: "plusMinusSize",
  initialState: 20,
  reducers: {
    plusSize: function (state) {
      return state + 1;
    },
    minusSize: function (state) {
      return state - 1;
    },
  },
});

export const { plusSize, minusSize } = plusMinusSize.actions;
export default plusMinusSize.reducer;
