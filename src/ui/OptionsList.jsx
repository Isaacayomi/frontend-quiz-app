import { useDispatch, useSelector } from "react-redux";
import OptionsButton from "./OptionsButton";
import { increaseScore, selectedAnswer } from "../features/QuestionSlice";
import { useLocation } from "react-router-dom";
import ICON_CORRECT from "../assets/images/icon-correct.svg";
import ICON_INCORRECT from "../assets/images/icon-incorrect.svg";
import { useEffect } from "react";

function OptionsList() {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    questions: questionObject,
    questionIndex,
    answerSelected,
  } = useSelector((state) => state.question || {});

  const { toggle } = useSelector((state) => state.toggle);

  // answer from the data.json
  const answer = questionObject?.questions?.[questionIndex]?.answer;

  // options from the data.json
  const options = questionObject?.questions?.[questionIndex]?.options;

  useEffect(() => {
    if (answerSelected !== null && options && answerSelected < options.length) {
      if (options[answerSelected] === answer) {
        dispatch(increaseScore());
      }
    }
    // eslint-disable-next-line
  }, [answerSelected]);

  if (!options) return null;

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <ul className="mb-[1rem] flex w-full flex-col items-center justify-center space-y-4">
      {options.map((option, index) => {
        const isSelected = answerSelected === index;
        const isCorrect = options[answerSelected] === answer;
        const isDisabled = answerSelected !== null;
        // console.log(isCorrect);

        let optionStyle = "";
        let labelStyle = isCorrect
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white";

        if (isSelected) {
          optionStyle = isCorrect
            ? "border-[0.3rem]  border-green-500"
            : "border-[0.3rem] border-red-500";
        }

        return (
          <OptionsButton
            key={index}
            disabled={isDisabled}
            onClick={() => {
              if (location.pathname === "/options") {
                dispatch(selectedAnswer(index));
              }
            }}
            className={`${optionStyle} px-0 py-[1.6rem] text-[1.125rem] font-medium lg:max-w-[35.25rem] lg:rounded-[1.5rem] ${toggle ? "dark:bg-[#3B4D66]" : "bg-white"}`}
          >
            <div className="flex items-center justify-start gap-[1rem] text-[1.125rem]">
              <span
                className={` ${optionStyle ? labelStyle : "bg-[#F4F6FA]"} ml-[1rem] rounded-lg px-[1.1rem] py-[0.69rem] text-[#626C7F]`}
              >
                {optionLabels[index]}
              </span>
              <span
                className={`flex w-full items-center justify-between ${toggle ? "dark:text-white" : "text-[#313E51]"}`}
              >
                {option}
                {isSelected && (
                  <img
                    className="mr-5"
                    src={isCorrect ? ICON_CORRECT : ICON_INCORRECT}
                    alt="icons"
                  />
                )}
              </span>
            </div>
          </OptionsButton>
        );
      })}
    </ul>
  );
}

export default OptionsList;
