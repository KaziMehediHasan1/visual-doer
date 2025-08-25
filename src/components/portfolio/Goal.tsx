import CommonTitle from "../reuse/CommonTitle";
import CommonWrapper from "../shared/CommonWrapper";
import Background from "../../assets/images/EffectTwo.png";
import GoalCard from "components/reuse/GoalCard";

const Goal = () => {
  return (
    <section className="relative w-full bg-black py-[clamp(3rem,6vw,8rem)]">
      {/* ===== BACKGROUND IMAGE LAYERS (using your image only) ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* 1) Big blurred background (so it bleeds like Figma) */}
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "140%", // oversize so it feels like full-bleed
            filter: "blur(28px) brightness(0.12)", // heavy blur + darken
            opacity: 1,
          }}
        />
        {/* 2) Slightly sharper top layer (gives subtle texture) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "110%", // a bit smaller so texture differs
            filter: "blur(8px) brightness(0.16)",
            mixBlendMode: "normal",
            opacity: 0.9,
          }}
        />
        {/* 3) subtle dark vignette so edges are darker like Figma */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.68) 100%)",
          }}
        />
      </div>

      <CommonWrapper>
        {/* TEXT */}
        <div className="space-y-4 text-center max-w-2xl mx-auto relative z-20">
          <CommonTitle
            text="set your goal with us"
            style="w-full text-center max-w-[500px] mx-auto"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed bg-clip-text text-transparent bg-[linear-gradient(45deg,#FFF_25%,#707070_100%)] px-3 sm:px-6">
            Set your goals with us and turn your vision into reality. Together,
            we’ll create a strategic roadmap to achieve lasting success.
          </p>
        </div>

        {/* CARDS: make sure GoalCard itself uses grid + has relative z so bg stays behind */}
        <div className="mt-10 relative z-30">
          <GoalCard />
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Goal;
