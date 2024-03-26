import { createSlice } from "@reduxjs/toolkit";

const lengvich = createSlice({
  name: "lengvich",
  initialState: 'Rus',
  reducers: {
    getLeng: function (state,params) {
      return params.payload;
    },
  },
});

export const { getLeng } = lengvich.actions;
export default lengvich.reducer;