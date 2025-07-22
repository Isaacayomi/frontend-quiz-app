import { configureStore } from "@reduxjs/toolkit";

import toggleReducer from "./features/ToggleSlice";
import questionReducer from "./features/QuestionSlice";
// import questionReducer from "./features/QuestionSlice";
const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    question: questionReducer,
  },
});

export default store;
