import { createSlice } from "@reduxjs/toolkit";

const witchText = createSlice({
  name: "witchText",
  initialState: false,
  reducers: {
    show: function () {
      return true;
    },
    hide: function () {
      return false;
    },
  },
});

export const {show,hide} = witchText.actions;
export default witchText.reducer;
