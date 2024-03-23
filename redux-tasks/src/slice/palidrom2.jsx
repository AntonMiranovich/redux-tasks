import { createSlice } from "@reduxjs/toolkit";

const palidrom = createSlice({
  name: "palidrom",
  initialState: { value: "", isPalidrom: false },
  reducers: {
    checkInp: function (state, params) {
      return { ...state, value: params.payload };
    },
    getPalidrom: function (state, params) {
      return {
        ...state,
        isPalidrom:
          state.value === state.value.split("").reverse().join("")
            ? true
            : false,
      };
    },
  },
});

export const { checkInp,getPalidrom } = palidrom.actions;
export default palidrom.reducer;
