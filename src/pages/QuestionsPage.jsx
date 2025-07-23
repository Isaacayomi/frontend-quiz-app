import { useDispatch, useSelector } from "react-redux";
import LeftPane from "../ui/LeftPane";
import { nextQuestion } from "../features/QuestionSlice";

function QuestionsPage() {
  const dispatch = useDispatch();
  const { questionIndex } = useSelector((state) => state.question);
  return (
    <button
      onClick={() => {
        dispatch(nextQuestion());
        console.log("Next question dispatched");
        console.log("Current subject index:", questionIndex);
      }}
    >
      Next Question
    </button>
  );
}

export default QuestionsPage;
