import { useSelector } from "react-redux";

function LeftPane({ children, style }) {
  // state.toggle(name of the reducer).toggle(the toggle state in the reducer)
  const toggle = useSelector((state) => state.toggle.toggle);

  return (
    <div className="mx-auto mb-[2.5rem] w-full max-w-[17.6875rem] font-rubik sm:mx-0 sm:mb-[4rem] sm:max-w-[27.75rem] md:mx-auto lg:mx-0 lg:pl-1">
      <h1
        className={`mb-[1rem] block text-[2.5rem] font-[300] leading-[100%] sm:w-full sm:whitespace-nowrap sm:text-[4rem] sm:font-[300] lg:mb-[3rem] ${toggle ? "text-white" : "dark:text-[#313E51]"}`}
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
            {/* #626C7F */}
            <p
              className={`${toggle ? "text-[#ABC1E1]" : "text-[#626C7F]"} md:pb-[3rem]lg:pt-0 pt-[2rem] text-[0.875rem] font-normal italic`}
            >
              Question 6 of 10
            </p>
            <span
              style={style}
              className="text-balance break-words pt-[0.5rem] text-[1.25rem] font-medium leading-[0.5rem] sm:block sm:leading-[1.5rem]"
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
