import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, reset } from "../features/QuestionSlice";
import OptionsButton from "./OptionsButton";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NextButton() {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    questionIndex,
    questions: questionObject,
    answerSelected,
    loading,
  } = useSelector((state) => state.question);

  const questionLength = questionObject?.questions?.length || 0;
  const lastQuestion = questionIndex + 1 === questionLength;

  const handleClick = () => {
    if (answerSelected === null) {
      setShowError(true);
      return;
    }

    setShowError(false);

    if (lastQuestion) {
      // Go to score page
      navigate("/score");
    } else {
      // Move to next question
      dispatch(nextQuestion());
      dispatch(reset());
      navigate("/options");
    }
  };

  return (
    <>
      {questionLength !== 0 && (
        <OptionsButton
          onClick={handleClick}
          className="mx-auto w-full text-center hover:bg-[#a729f56e] lg:max-w-[35.25rem]"
        >
          <span>{lastQuestion ? "Submit" : "Next Question"}</span>
        </OptionsButton>
      )}

      {questionLength === 0 && loading === false && (
        <OptionsButton
          to="/"
          className="mx-auto w-full text-center hover:bg-[#a729f56e] lg:max-w-[35.25rem]"
        >
          BACK TO START MENU
        </OptionsButton>
      )}

      {showError && <ErrorMessage />}
    </>
  );
}

export default NextButton;
