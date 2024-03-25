import { createSlice } from "@reduxjs/toolkit";

const validationEmail = createSlice({
  name: "validationEmail",
  initialState: "",
  reducers: {
    emailValid: function (state, params) {
      return params.payload
    },
  },
});

export const { emailValid } = validationEmail.actions;
export default validationEmail.reducer;