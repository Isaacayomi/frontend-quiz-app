import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ToggleSlice";
import { useLocation } from "react-router-dom";
import MOON_ICON from "../assets/images/icon-moon-dark.svg";
import SUN_ICON from "../assets/images/icon-sun-dark.svg";
import MOON_ICON_LIGHT from "../assets/images/icon-moon-light.svg";
import SUN_ICON_LIGHT from "../assets/images/icon-sun-light.svg";
import HTML_ICON from "../assets/images/icon-html.svg";
import CSS_ICON from "../assets/images/icon-css.svg";
import JAVASCRIPT_ICON from "../assets/images/icon-js.svg";
import ACCESSIBLITY_ICON from "../assets/images/icon-accessibility.svg";

function ToggleButton() {
  const subjectIcons = [
    HTML_ICON,
    CSS_ICON,
    JAVASCRIPT_ICON,
    ACCESSIBLITY_ICON,
  ];

  const iconsBg = [
    "bg-[#FFF5ED]",
    "bg-[#E0FDEF]",
    "bg-[#EBF0FF]",
    "bg-[#F6E7FF]",
  ];

  const location = useLocation();
  const gameScreen =
    location.pathname === "/options" || location.pathname === "/score";
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggle);
  const { selectedSubject, subjectIndex } = useSelector(
    (state) => state.question,
  );

  return (
    <div
      className={`mb-[1.5rem] flex justify-between pt-[1.62rem] ${!gameScreen ? "mr-[1.5rem]" : "mx-[1.5rem]"}`}
    >
      {gameScreen && (
        <div
          className={`${iconsBg[subjectIndex]} flex h-[1.8rem] w-[1.8rem] items-center gap-[1rem] rounded-md`}
        >
          <img
            src={subjectIcons[subjectIndex]}
            alt="subject icon"
            className="w-full p-1"
          />
          <span
            className={`text-[1.125rem] font-medium ${toggle ? "text-white" : "text-[#313E51]"}`}
          >
            {selectedSubject}
          </span>
        </div>
      )}

      <div
        className={`flex items-center gap-2 ${!gameScreen ? "ml-auto justify-end" : "justify-end"}`}
      >
        <img
          src={toggle ? SUN_ICON_LIGHT : SUN_ICON}
          alt="sun icon"
          className="h-5 w-5"
        />

        <button
          onClick={() => dispatch(toggleTheme(!toggle))}
          className="relative h-[1.55rem] w-10 rounded-full bg-[#A729F5] p-1 outline-none transition-colors duration-300"
          aria-label="Toggle theme"
        >
          <span
            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${toggle ? "translate-x-[0.9rem]" : "translate-x-0"} `}
          ></span>
        </button>

        <img
          src={toggle ? MOON_ICON_LIGHT : MOON_ICON}
          alt="moon icon"
          className="h-5 w-5"
        />
      </div>
    </div>
  );
}

export default ToggleButton;
