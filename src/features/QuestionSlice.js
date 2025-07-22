import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubject: "",
  selectedSubjectIcon: "",
  subjectIndex: null,
};

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
  },
});

export default questionSlice.reducer;

export const { selectSubject, selectSubjectIcon, selectedIndex } =
  questionSlice.actions;
