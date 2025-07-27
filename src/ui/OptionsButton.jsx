import { Link } from "react-router-dom";

function OptionsButton({ className, onClick, children, disabled, to }) {
  return (
    <Link
      to={to}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`${className} ${disabled && "cursor-not-allowed"} shadow-[0px_16px_40px_0px_rgba(143, 160, 193, 0.14)] cursor:pointer w-full max-w-[20.4375rem] rounded-md bg-[#A729F5] py-[1.9rem] text-[1.125rem] font-medium text-white transition-colors duration-300 sm:max-w-[40rem] lg:max-w-[40rem]`}
    >
      {children}
    </Link>
  );
}

export default OptionsButton;
