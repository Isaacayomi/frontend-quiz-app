import HTML_ICON from "../assets/images/icon-html.svg";
import CSS_ICON from "../assets/images/icon-css.svg";
import JAVASCRIPT_ICON from "../assets/images/icon-js.svg";
import ACCESSIBLITY_ICON from "../assets/images/icon-accessibility.svg";
import { useSelector } from "react-redux";

function ScoreBoard() {
  const { questions: questionObject } = useSelector(
    (state) => state.question || {},
  );
  const questionLength = questionObject?.questions?.length || 0;
  const { totalCorrectAnswers } = useSelector((state) => state.question);
  const { selectedSubject, selectedSubjectIcon } = useSelector(
    (state) => state.question,
  );
  const { toggle } = useSelector((state) => state.toggle);

  return (
    <div
      className={`${
        toggle ? "text-white dark:bg-[#3B4D66]" : "bg-white"
      } w-full rounded-[0.75rem] bg-white p-6 font-rubik font-medium text-[#313E51] md:p-12`}
    >
      <div className="flex items-start justify-center gap-[1rem] rounded-xl pt-[2rem]">
        <img src={selectedSubjectIcon} alt="Subject icon" />
        <span className="pt-1">{selectedSubject}</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-[-1rem] pb-[2rem]">
        <span
          className={`${toggle ? "text-white" : "text-[#313E51]"} text-[6.5rem]`}
        >
          {totalCorrectAnswers}
        </span>
        <span className="text-[#626C7F) text-[1.125rem]">
          out of {questionLength}
        </span>
      </div>
    </div>
  );
}

export default ScoreBoard;
