import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import LeftPane from "../ui/LeftPane";
import { nextQuestion, reset } from "../features/QuestionSlice";
import OptionsButton from "../ui/optionsButton";
import OptionsList from "../ui/OptionsList";

function QuestionsPage() {
  const dispatch = useDispatch();

  const { questionIndex } = useSelector((state) => state.question);

  return (
    <div className="flex flex-col items-center justify-center">
      <OptionsList />

      <OptionsButton
        // disabled = {}
        className="mx-auto w-full text-center hover:bg-[#a729f56e] lg:max-w-[35.25rem]"
        onClick={() => {
          dispatch(nextQuestion());
          dispatch(reset());

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
