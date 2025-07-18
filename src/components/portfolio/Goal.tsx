import CommonTitle from "../reuse/CommonTitle";
import CommonWrapper from "../shared/CommonWrapper";

const Goal = () => {
  return (
    <CommonWrapper>
      <div>
        <CommonTitle
          text="set your gaol with us"
          style="max-w-[250px]
          md:max-w-[300px]"
        />
        <p className="text-center md:text-[18px] sm:text-[13px] text-xs sm:max-w-[70%] mx-auto bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[140%]">
          Set your goals with us and turn your vision into reality. Together,
          well create a strategic roadmap to achieve lasting success.
        </p>
      </div>
    </CommonWrapper>
  );
};

export default Goal;
