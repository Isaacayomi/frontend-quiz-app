import { useSelector } from "react-redux";
import OptionsButton from "./optionsButton";

function OptionsList() {
  const { questions: questionObject } = useSelector(
    (state) => state.question || {},
  );

  const { questionIndex } = useSelector((state) => state.question);
  const { toggle } = useSelector((state) => state.toggle);

  const options = questionObject?.questions?.[questionIndex]?.options;
  if (!options) return null;

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <ul className="mb-[1rem] flex w-full flex-col items-center justify-center space-y-4">
      {options.map((option, index) => (
        <OptionsButton
          className={`bg-white px-0 py-[1.6rem] text-[1.125rem] font-medium ${toggle ? "dark:bg-[#3B4D66]" : "bg-white"}`}
          key={index}
        >
          <div className="flex items-center justify-start gap-[1rem] text-[1.125rem]">
            <span className="ml-[1rem] rounded-lg bg-[#F4F6FA] px-[1.1rem] py-[0.69rem] text-[#626C7F]">
              {optionLabels[index]}
            </span>
            <span
              className={`${toggle ? "dark:text-white" : "text-[#313E51]"} text-wrap`}
            >
              {option}
            </span>
          </div>
        </OptionsButton>
      ))}
    </ul>
  );
}

export default OptionsList;
