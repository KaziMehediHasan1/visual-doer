import CommonTitle from "../reuse/CommonTitle";
import CommonWrapper from "../shared/CommonWrapper";
import Image from "../../assets/images/EffectTwo.png";
import GoalCard from "components/reuse/GoalCard";

const Goal = () => {
  return (
    <CommonWrapper>
      {/* BACKGROUND SECTION */}
      <section
        style={{
          backgroundImage: `url(${Image.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full min-h-[400px] sm:min-h-[600px] lg:min-h-[800px] xl:min-h-[1250px]"
      >
        {/* TEXT SECTION */}
        <section className="pt-2 xl:pt-44">
          <CommonTitle
            text="set your goal with us"
            style="max-w-[250px] md:max-w-[300px] mx-auto"
          />
          <p className="md:text-[18px] sm:text-[13px] text-xs sm:max-w-[55%] mx-auto bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[140%] text-center">
            Set your goals with us and turn your vision into reality. Together,
            we’ll create a strategic roadmap to achieve lasting success.
          </p>
        </section>
        <section className="pt-10">
          <GoalCard />
        </section>
      </section>
    </CommonWrapper>
  );
};

export default Goal;
