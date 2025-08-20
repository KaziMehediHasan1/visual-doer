import RightArrow from "../../assets/icons/RightArrow";
import React from "react";

const PrimaryButton = ({
  style,
  text,
  icon,
  event,
  booleanText,
  booleanTextShow,
}: {
  text: string;
  style?: string;
  icon?: boolean;
  event?: () => void;
  booleanText?: string;
  booleanTextShow?: boolean;
}) => {
  return (
    <button
      onClick={event}
      className={`${style} flex items-center mx-auto gap-2  rounded-primaryRound border-[1px] border-white px-7 py-3 leading-[170%] 
    hover:shadow-[0_0_20px_#00D1AE] transition duration-300 ease-in-out cursor-pointer bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent`}
    >
      <span className="font-semibold text-xs sm:text-sm md:text-[17px]">
        {booleanTextShow ? booleanText : text}
      </span>
      {icon && <RightArrow />}
    </button>
  );
};

export default PrimaryButton;
