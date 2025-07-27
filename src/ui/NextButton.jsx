import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, reset } from "../features/QuestionSlice";
import OptionsButton from "./optionsButton";
import ErrorMessage from "./ErrorMessage";

function NextButton() {
  const dispatch = useDispatch();

  const { questionIndex } = useSelector((state) => state.question);

  const { questions: questionObject } = useSelector((state) => state.question);

  const questionLength = questionObject?.questions?.length || 0;

  // const { questions } = useSelector((state) => state.question.questions);
  // const totalQuestion = questions.length;

  return (
    <>
      <OptionsButton
        // disabled = {}
        className="mx-auto w-full text-center hover:bg-[#a729f56e] lg:max-w-[35.25rem]"
        onClick={() => {
          dispatch(nextQuestion());
          dispatch(reset());
        }}
      >
        <span>
          {questionIndex + 1 === questionLength ? "Submit" : "Next Question"}
        </span>
      </OptionsButton>
      <ErrorMessage />
    </>
  );
}

export default NextButton;
