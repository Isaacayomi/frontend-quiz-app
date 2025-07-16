function WelcomeHeading() {
  return (
    <div className="font-rubik mx-auto mb-[2.5rem] w-full max-w-[17.6875rem] sm:mx-0 sm:mb-[4rem] sm:max-w-[27.75rem] md:mx-auto lg:mx-0">
      <h1 className="mb-[1rem] block text-[2.5rem] font-[300] leading-[100%] text-[#313E51] sm:w-full sm:whitespace-nowrap sm:text-[4rem] sm:font-[300] lg:mb-[3rem]">
        Welcome to the{" "}
        <span className="whitespace-nowrap pt-[0.5rem] font-medium sm:block">
          Frontend Quiz!
        </span>
      </h1>
      <p className="text-[0.875rem] font-normal italic text-[#626C7F] md:pb-[3rem]">
        Pick a subject to get started.
      </p>
    </div>
  );
}

export default WelcomeHeading;
