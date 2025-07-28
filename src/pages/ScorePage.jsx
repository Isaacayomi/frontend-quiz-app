import { useSelector } from "react-redux";
import ScoreBoard from "../ui/ScoreBoard";
import OptionsButton from "../ui/OptionsButton";
import RestartButton from "../ui/RestartButton";

function ScorePage() {
  const toggle = useSelector((state) => state.toggle.toggle);

  return (
    <div className="w-full lg:flex lg:items-start lg:gap-[3rem]">
      <div className="w-full lg:w-[40%]">
        <h1
          className={`mb-[1rem] pl-[1.5rem] text-[2.5rem] font-[300] leading-[100%] sm:text-[4rem] md:ml-[-5rem] lg:ml-[-5rem] lg:text-[3.7rem] ${toggle ? "text-white" : "dark:text-[#313E51]"} md:pl-[4rem] lg:pl-0`}
        >
          <span className="block">Quiz completed</span>
          <span className="block pb-[2.5rem] pt-[0.5rem] font-medium">
            You scored...
          </span>
        </h1>
      </div>

      <div className="flex w-full flex-col items-center justify-center lg:w-[60%]">
        <ScoreBoard />
        <RestartButton />
      </div>
    </div>
  );
}

export default ScorePage;
