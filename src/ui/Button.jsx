function Button({ src, children, bgClass }) {
  return (
    <button className="md:cursor:pointer font-rubik shadow-[0px_16px_40px_0px_rgba(143, 160, 193, 0.14)] mx-auto mb-[1rem] flex w-full max-w-[20.4375rem] items-center gap-[1rem] rounded-xl bg-white p-[1rem] text-[1.125rem] font-medium text-[#313E51] sm:mx-0 sm:w-[90%] sm:max-w-[40rem] md:mx-auto lg:mx-0">
      <span className={`${bgClass} max-w-[2.5rem] rounded-lg`}>
        <img src={src} alt="subject icon" className="w-full p-[0.36rem]" />
      </span>
      {children}
    </button>
  );
}

export default Button;
