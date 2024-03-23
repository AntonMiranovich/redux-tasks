import { createSlice } from "@reduxjs/toolkit";

const inpVal = createSlice({
  name: "inpVal",
  initialState: "",
  reducers: {
    fillingTheLine: function (state, params) {
      return params.payload;
    },
  },
});

export const { fillingTheLine } = inpVal.actions;
export default inpVal.reducer;
