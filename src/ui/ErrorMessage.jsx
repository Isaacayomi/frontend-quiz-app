import ICON_INCORRECT from "../assets/images/icon-incorrect.svg";
function ErrorMessage() {
  return (
    <div className="mt-[1rem] flex items-center justify-center gap-[0.5rem] pb-[3.38rem] text-[1.125rem] font-medium text-[#EE5454] sm:text-[1.5rem] sm:font-normal">
      <img src={ICON_INCORRECT} alt="error icon" className="w-[2rem]" />
      <span>Please select an option</span>
    </div>
  );
}

export default ErrorMessage;
