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

  return (
    <div className="mx-auto w-full max-w-[20.4375rem] bg-white font-medium text-[#313E51]">
      <div className="flex items-start justify-center gap-[1rem] rounded-xl pt-[2rem]">
        <img src={HTML_ICON} alt="Subject icon" />
        <span className="pt-1">HTML</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-[-1rem] pb-[2rem]">
        <span className="text-[6.5rem] text-[#313E51]">
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
