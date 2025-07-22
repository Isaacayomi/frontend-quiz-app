import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ToggleSlice";
import MOON_ICON from "../assets/images/icon-moon-dark.svg";
import SUN_ICON from "../assets/images/icon-sun-dark.svg";
import MOON_ICON_LIGHT from "../assets/images/icon-moon-light.svg";
import SUN_ICON_LIGHT from "../assets/images/icon-sun-light.svg";

function ToggleButton() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggle);

  return (
    <div className="mr-[1.5rem] flex items-center justify-end gap-2 pt-[1.62rem]">
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
      {/* <img src = {$} */}
    </div>
  );
}

export default ToggleButton;
