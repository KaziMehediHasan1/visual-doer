const SecondaryButton = ({ text, style }: { text: string; style: string }) => {
  return (
    <button
      className={`${style} flex items-center gap-2 text-[17px] rounded-primaryRound border-[1px] border-white  px-3 py-2 sm:px-5 leading-[170%] 
    hover:shadow-[0_0_20px_#00D1AE] ease-in-out cursor-pointer transform duration-200`}
    >
      <span className="bg-gradient-to-tr from-white to-primary-800 bg-clip-text text-transparent font-semibold">
        {text}
      </span>
    </button>
  );
};

export default SecondaryButton;
