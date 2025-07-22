/*

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestion } from "../services/apiGetQuestions";

// Async thunk for fetching a question
export const fetchQuestion = createAsyncThunk(
  "question/fetchQuestion",
  async (index) => {
    return await getQuestion(index);
  },
);

const initialState = {
  question: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    quizQuestions(state, action) {
      state.question = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestion.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchQuestion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.question = action.payload;
      })
      .addCase(fetchQuestion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { quizQuestions } = questionSlice.actions;

export default questionSlice.reducer;
*/
