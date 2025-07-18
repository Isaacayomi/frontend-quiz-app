import { useState } from "react";
import MOON_ICON from "../assets/images/icon-moon-dark.svg";
import SUN_ICON from "../assets/images/icon-sun-dark.svg";

function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  return (
    <div className="mr-[1.5rem] flex items-center justify-end gap-2 pt-[1.62rem]">
      <img src={SUN_ICON} alt="sun icon" className="h-5 w-5" />

      <button
        onClick={handleToggle}
        className="relative h-[1.55rem] w-10 rounded-full bg-[#A729F5] p-1 transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#A729F5] focus:ring-opacity-10 focus:ring-offset-2"
        aria-label="Toggle theme"
      >
        <span
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${toggle ? "translate-x-[0.9rem]" : "translate-x-0"} `}
        ></span>
      </button>

      <img src={MOON_ICON} alt="moon icon" className="h-5 w-5" />
    </div>
  );
}

export default ToggleButton;
