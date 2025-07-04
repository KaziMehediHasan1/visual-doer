import RightArrow from "@/assets/icons/RightArrow";
import React from "react";

const PrimaryButton = ({ style, text }: { text: string; style?: string }) => {
  return (
    <button
      className={`${style} flex items-center mx-auto gap-2 text-[17px] rounded-primaryRound border-[1px] border-white px-3 py-2.5 sm:px-5 leading-[170%] 
    hover:shadow-[0_0_20px_#00D1AE] transition duration-300 ease-in-out cursor-pointer bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent`}
    >
      <span className="font-medium md:text-[18px] sm:text-[13px] text-xs">{text}</span>
      <RightArrow />
    </button>
  );
};

export default PrimaryButton;
