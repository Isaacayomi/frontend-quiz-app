import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import LeftPane from "../ui/LeftPane";
import { nextQuestion } from "../features/QuestionSlice";
import OptionsButton from "../ui/optionsButton";
import OptionsList from "../ui/OptionsList";

function QuestionsPage() {
  const dispatch = useDispatch();
  const { questions: questionObject } = useSelector(
    (state) => state.question || {},
  );
  const { questionIndex } = useSelector((state) => state.question);

  const options = questionObject?.questions?.[questionIndex]?.options;
  console.log(options);

  return (
    <div className="flex flex-col items-center justify-center">
      <OptionsList />

      <OptionsButton
        className="mx-auto text-center"
        onClick={() => {
          dispatch(nextQuestion());
          console.log("Next question dispatched");
          console.log("Current subject index:", questionIndex);
        }}
      >
        <span>Next Question</span>
      </OptionsButton>
    </div>
  );
}

export default QuestionsPage;
