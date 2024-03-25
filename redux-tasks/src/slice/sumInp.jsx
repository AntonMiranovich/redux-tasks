import { createSlice } from "@reduxjs/toolkit";

const sumInp = createSlice({
  name: "sumInp",
  initialState: { inp1: "", inp2: "", res: '' },
  reducers: {
    inp1Val: function (state, params) {
      return { ...state, inp1: [params.payload] };
    },
    inp2Val: function (state, params) {
      return { ...state, inp2: [params.payload] };
    },
    resultSumInp: function (state) {
      return { res: +state.inp1 + +state.inp2, inp1: "", inp2: "" };
    },
  },
});

export const { inp1Val, inp2Val, resultSumInp } = sumInp.actions;
export default sumInp.reducer;
