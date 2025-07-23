import { Children } from "react";

function OptionsButton({ className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${className} shadow-[0px_16px_40px_0px_rgba(143, 160, 193, 0.14)] cursor:pointer rounded-md bg-[#A729F5] px-[6.37rem] py-[1.9rem] text-[1.125rem] font-medium text-white transition-colors duration-300 hover:bg-[#a729f56e]`}
    >
      {children}
    </button>
  );
}

export default OptionsButton;
