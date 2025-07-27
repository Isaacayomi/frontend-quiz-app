import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, reset } from "../features/QuestionSlice";
import OptionsButton from "./optionsButton";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

function NextButton() {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const { questionIndex } = useSelector((state) => state.question);

  const { questions: questionObject } = useSelector((state) => state.question);
  const { answerSelected } = useSelector((state) => state.question);

  const questionLength = questionObject?.questions?.length || 0;
  const lastQuestion = questionIndex + 1 === questionLength;

  return (
    <>
      <OptionsButton
        to={lastQuestion ? "/score" : "/options"}
        className="mx-auto w-full text-center hover:bg-[#a729f56e] lg:max-w-[35.25rem]"
        onClick={() => {
          if (answerSelected === null) {
            setShowError(true);
            return;
          } else {
            setShowError(false);
            dispatch(nextQuestion());
            dispatch(reset());
          }
        }}
      >
        <span>{lastQuestion ? "Submit" : "Next Question"}</span>
      </OptionsButton>

      {showError && <ErrorMessage />}
    </>
  );
}

export default NextButton;
