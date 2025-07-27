import { useSelector } from "react-redux";

function LeftPane({ children, style }) {
  // state.toggle(name of the reducer).toggle(the toggle state in the reducer)
  const toggle = useSelector((state) => state.toggle.toggle);
  const { questions: questionObject, status } = useSelector(
    (state) => state.question || {},
  );
  const questionLength = questionObject?.questions?.length || 0;
  const { questionIndex } = useSelector((state) => state.question);

  return (
    <div className="mx-auto mb-[2.5rem] w-full max-w-[17.6875rem] font-rubik sm:mx-0 sm:mb-[4rem] sm:max-w-[27.75rem] sm:pl-[4rem] md:mx-auto md:pl-0 lg:mx-0 lg:w-full lg:max-w-[29.0625rem] lg:pl-[4rem]">
      <h1
        className={`mb-[1rem] block text-[2.5rem] font-[300] leading-[100%] sm:w-full sm:whitespace-nowrap sm:text-[4rem] sm:font-[300] md:ml-[-5rem] lg:mb-[3rem] lg:ml-0 ${toggle ? "text-white" : "dark:text-[#313E51]"}`}
      >
        {!children ? (
          <>
            Welcome to the{" "}
            <span className="whitespace-nowrap pt-[0.5rem] font-medium sm:block">
              Frontend Quiz!
            </span>
          </>
        ) : (
          <>
            <p
              className={`${toggle ? "text-[#ABC1E1]" : "text-[#626C7F]"} md:pb-[3rem]lg:pt-0 pt-[2rem] text-[0.875rem] font-normal italic`}
            >
              {status === "loading"
                ? "Loading..."
                : `Questions ${questionIndex + 1} of  ${questionLength}`}
            </p>
            <span
              style={style}
              className="text-balance break-words pt-[0.5rem] text-[1.25rem] font-medium leading-[0.5rem] sm:block sm:leading-[1.5rem] lg:w-full lg:text-[2.25rem] lg:leading-[2.7rem]"
            >
              {children}
            </span>
          </>
        )}
      </h1>
      {!children && (
        <p
          className={`${toggle ? "text-[#ABC1E1]" : "text-[#626C7F]"} text-[0.875rem] font-normal italic md:pb-[3rem]`}
        >
          Pick a subject to get started.
        </p>
      )}
    </div>
  );
}

export default LeftPane;
