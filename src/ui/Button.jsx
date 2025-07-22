import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Button({ src, children, bgClass, onClick, to }) {
  const toggle = useSelector((state) => state.toggle.toggle);
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className={`md:cursor:pointer shadow-[0px_16px_40px_0px_rgba(143, 160, 193, 0.14)] lg:bg mx-auto mb-[1rem] flex w-full max-w-[20.4375rem] items-center gap-[1rem] rounded-xl p-[1rem] font-rubik text-[1.125rem] font-medium text-[#313E51] sm:mx-0 sm:w-[90%] sm:max-w-[40rem] md:mx-auto lg:pr-0 ${toggle ? "text-white dark:bg-[#3B4D66]" : "bg-white text-[#313E51]"}`}
      >
        <span className={`${bgClass} max-w-[2.5rem] rounded-lg`}>
          <img src={src} alt="subject icon" className="w-full p-[0.36rem]" />
        </span>
        {children}
      </button>
    </Link>
  );
}

export default Button;
