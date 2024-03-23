import { configureStore } from "@reduxjs/toolkit";
import couter1 from "../slice/couter1";
import couter2 from "../slice/counter2";
import inpVal from "../slice/inpVal";
import palidrom from "../slice/palidrom";
import palidrom2 from "../slice/palidrom2";
import witchText from "../slice/witchText";

const store = configureStore({
  reducer: {
    couter1: couter1,
    couter2: couter2,
    inpVal: inpVal,
    palidrom: palidrom,
    palidrom2: palidrom2,
    witchText: witchText,
  },
});

export default store;
