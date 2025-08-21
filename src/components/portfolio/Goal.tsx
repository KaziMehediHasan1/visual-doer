import CommonTitle from "../reuse/CommonTitle";
import CommonWrapper from "../shared/CommonWrapper";
import Image from "../../assets/images/EffectTwo.png";
import GoalCard from "components/reuse/GoalCard";

const Goal = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${Image.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="max-h-[1200px] bg-contain mx-auto"
    >
      <CommonWrapper>
        <>
          {/* TEXT SECTION */}
          <section className="space-y-3 pt-2 xl:pt-20">
            <CommonTitle
              text="set your goal with us"
              style="w-[50%] min-w-[300px] lg:max-w-[450px]"
            />
            <p className="md:text-[18px] sm:text-[13px] text-xs sm:max-w-[55%] mx-auto bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[140%] text-center">
              Set your goals with us and turn your vision into reality.
              Together, we’ll create a strategic roadmap to achieve lasting
              success.
            </p>
          </section>
          <section className=" pt-[clamp(2rem,2.5vw,4rem)]">
            <GoalCard />
          </section>
        </>
      </CommonWrapper>
    </section>
  );
};

export default Goal;
