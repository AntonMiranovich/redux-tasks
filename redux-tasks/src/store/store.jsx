import { configureStore } from "@reduxjs/toolkit";
import couter1 from "../slice/couter1";
import couter2 from "../slice/counter2";
import inpVal from "../slice/inpVal";
import palidrom from "../slice/palidrom";
import palidrom2 from "../slice/palidrom2";
import witchText from "../slice/witchText";
import validationEmail from "../slice/validationEmail";
import sumInp from "../slice/sumInp";
import validPass from "../slice/validPass";
import plusMinusSize from "../slice/plusMinusSize";
import lengvich from "../slice/lengvich";
import ulTasks from "../slice/ulTasks";

const store = configureStore({
  reducer: {
    couter1: couter1,
    couter2: couter2,
    inpVal: inpVal,
    palidrom: palidrom,
    palidrom2: palidrom2,
    witchText: witchText,
    validationEmail:validationEmail,
    sumInp:sumInp,
    validPass:validPass,
    plusMinusSize:plusMinusSize,
    lengvich:lengvich,
    ulTasks:ulTasks
  },
});

export default store;
