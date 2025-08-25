import CommonTitle from "../reuse/CommonTitle";
import CommonWrapper from "../shared/CommonWrapper";
import Image from "next/image";
import Background from "../../assets/images/EffectTwo.png";
import GoalCard from "components/reuse/GoalCard";

const Goal = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full py-[clamp(3rem,6vw,8rem)]"
    >
      <CommonWrapper>
        {/* TEXT SECTION */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <CommonTitle
            text="set your goal with us"
            style="w-full text-center max-w-[500px] mx-auto"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent px-3 sm:px-6">
            Set your goals with us and turn your vision into reality. Together,
            we’ll create a strategic roadmap to achieve lasting success.
          </p>
        </div>

        {/* GOALCARD with small BG */}
        <div className="mt-10 flex justify-center">
          <GoalCard />
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Goal;
