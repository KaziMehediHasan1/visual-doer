const SecondaryButton = ({ text }: { text: string }) => {
  return (
    <button
      className="flex items-center gap-2 text-[17px] rounded-primaryRound border-[1px] border-white  px-3 py-2 sm:px-5 leading-[170%] 
    shadow-[0_0_20px_#00D1AE] ease-in-out cursor-pointer"
    >
      <span className="bg-gradient-to-tr from-white to-primary-800 bg-clip-text text-transparent font-semibold">{text}</span>
    </button>
  );
};

export default SecondaryButton;
