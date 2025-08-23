import CommonTitle from "../reuse/CommonTitle";
import CommonWrapper from "../shared/CommonWrapper";
import Image from "next/image";
import Background from "../../assets/images/EffectTwo.png";
import GoalCard from "components/reuse/GoalCard";

const Goal = () => {
  return (
    <section className="relative w-full py-[clamp(3rem,6vw,8rem)]">
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
        <div className="relative py-10">
          <Image
            src={Background}
            alt="bg"
            width={500}
            height={200}
            className="absolute h-fit w-full top-1/2 -translate-y-1/2 object-contain opacity-70"
          />
          <GoalCard />
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Goal;
