import OptionsList from "./OptionsList";
import NextButton from "./NextButton";

function Options() {
  return (
    <div className="flex flex-col items-center justify-center">
      <OptionsList />
      <NextButton />
    </div>
  );
}

export default Options;
