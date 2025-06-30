import RightArrow from "@/assets/icons/RightArrow";

const PrimaryButton = ({ text, style }: { text: string; style?: string }) => {
  return (
    <button
      className={`${style} lg:flex items-center gap-2 text-[17px] rounded-primaryRound border-[1px] border-white text-white px-3 py-2 sm:px-5 leading-[170%] 
    hover:shadow-[0_0_20px_#00D1AE] transition duration-300 ease-in-out cursor-pointer`}
    >
      <span className="font-medium">{text}</span>
      <RightArrow />
    </button>
  );
};

export default PrimaryButton;
