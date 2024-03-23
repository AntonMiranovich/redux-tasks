import { createSlice } from "@reduxjs/toolkit";

const palidrom = createSlice({
  name: "palidrom",
  initialState: "",
  reducers: {
    checkInp: function (state, params) {
      return params.payload
    },
  },
});

export const { checkInp } = palidrom.actions;
export default palidrom.reducer;
