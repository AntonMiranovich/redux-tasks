import { createSlice } from "@reduxjs/toolkit";

const validPass = createSlice({
  name: "validPass",
  initialState: "",
  reducers: {
    passwordValid: function (state, params) {
      return params.payload
    },
  },
});

export const { passwordValid } = validPass.actions;
export default validPass.reducer;