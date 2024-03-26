import { createSlice } from "@reduxjs/toolkit";

const ulTasks = createSlice({
  name: "ulTasks",
  initialState: {
    arr: ["job", "sleep", "play", "eat"],
    inp: "",
  },
  reducers: {
    addTask: function (state) {
      return { ...state, arr: [...state.arr, state.inp] };
    },
    inpVal: function (state, params) {
      return { ...state, inp: params.payload };
    },
    delVal: function (state, params) {
      return { ...state, arr: state.arr.filter((el) => el != params.payload) };
    },
  },
});

export const { addTask, inpVal ,delVal} = ulTasks.actions;
export default ulTasks.reducer;
