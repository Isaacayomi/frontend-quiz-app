import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestion } from "../services/apiGetQuestions";

const initialState = {
  selectedSubject: "",
  selectedSubjectIcon: "",
  subjectIndex: null,
  loading: false,
  error: null,
  questions: [],
  questionIndex: 0,
  answerSelected: null,
  totalCorrectAnswers: 0,
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async ({ subject, subjectIndex }, thunkAPI) => {
    try {
      const subjectsQuestion = await getQuestion(subject, subjectIndex);
      return subjectsQuestion;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    selectSubject(state, action) {
      state.selectedSubject = action.payload;
    },

    selectSubjectIcon(state, action) {
      state.selectedSubjectIcon = action.payload;
    },

    selectedIndex(state, action) {
      state.subjectIndex = action.payload;
    },

    selectedAnswer(state, action) {
      state.answerSelected = action.payload;
    },

    nextQuestion(state) {
      if (
        state.questions &&
        state.questions.questions &&
        state.questionIndex < state.questions.questions.length - 1
      ) {
        state.questionIndex += 1;
      }
    },

    increaseScore(state) {
      state.totalCorrectAnswers = state.totalCorrectAnswers + 1;
    },

    reset(state) {
      state.answerSelected = null;
    },

    resetQuiz() {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default questionSlice.reducer;

export const {
  selectSubject,
  selectSubjectIcon,
  selectedIndex,
  nextQuestion,
  selectedAnswer,
  increaseScore,
  reset,
  resetQuiz,
} = questionSlice.actions;
