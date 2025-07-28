import { useDispatch, useSelector } from "react-redux";
import ScoreBoard from "../ui/ScoreBoard";
import OptionsButton from "../ui/OptionsButton";
import { resetQuiz } from "../features/QuestionSlice";

function ScorePage() {
  const toggle = useSelector((state) => state.toggle.toggle);
  const dispatch = useDispatch();

  return (
    <>
      <h1
        className={`mb-[1rem] block pl-[1.5rem] text-[2.5rem] font-[300] leading-[100%] sm:w-full sm:text-[4rem] sm:font-[300] md:ml-[-5rem] lg:mb-[3rem] lg:ml-0 ${toggle ? "text-white" : "dark:text-[#313E51]"}`}
      >
        <span className="block">Quiz completed</span>
        <span className="block pb-[2.5rem] pt-[0.5rem] font-medium">
          You scored...
        </span>
      </h1>
      <ScoreBoard />
      <OptionsButton
        onClick={() => dispatch(resetQuiz())}
        className="mx-auto w-full text-center hover:bg-[#a729f56e] lg:max-w-[35.25rem]"
        to="/"
      >
        Play Again
      </OptionsButton>
    </>
  );
}

export default ScorePage;
