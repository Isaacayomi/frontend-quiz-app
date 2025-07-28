import { useDispatch } from "react-redux";
import { resetQuiz } from "../features/QuestionSlice";
import { Link } from "react-router-dom";

function RestartButton() {
  const dispatch = useDispatch();

  //
  return (
    <Link
      to="/"
      className={`hover:cursor:pointer mx-auto mt-4 w-full max-w-[20.4375rem] rounded-[0.75rem] bg-[#A729F5] p-4 text-center font-rubik text-[1.125rem] font-medium text-white shadow-[0_16px_40px_0_rgba(143,160,193,0.14)] md:max-w-[40rem] lg:max-w-[35.25rem]`}
      onClick={() => dispatch(resetQuiz())}
    >
      Play Again
    </Link>
  );
}

export default RestartButton;
