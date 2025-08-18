import Google from "../../assets/icons/Google";
import Background from "../../assets/images/MoonShape.png";
import Star from "../../assets/Logo/Star";
import CommonWrapper from "../shared/CommonWrapper";
import Gurranty from "../../assets/Logo/Gurranty";
import PrimaryButton from "../reuse/PrimaryButton";
const Hero = () => {
  return (
    <div className="w-full max-w-[75%] mx-auto">
      {/* TEXT SECTION */}
      <section className="space-y-3 md:space-y-5 mt-[clamp(40px,5vw,80px)]">
        <h1 className="text-[clamp(40px,5vw,80px)] leading-[clamp(65px,6vw,96px)] font-semibold text-center bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent">
          build the brand <br /> with visual doer agency
        </h1>
        <p className="text-center text-[clamp(1.2rem,3.2vw,1.5rem)] leading-[clamp(2rem,8vw,2.3rem)] sm:max-w-[70%] mx-auto bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent ">
          Empowering businesses with cutting-edge AI technology. Transforming
          ideas into intelligent, scalable solutions.
        </p>
      </section>
      {/* REVIEW CARD */}
      <div
        className="w-full bg-no-repeat bg-contain"
        style={{
          minHeight: "clamp(392px, 214vw, 1440px)",
          backgroundImage: `url(${Background.src})`,
        }}
      >
        <CommonWrapper>
          <div className="w-fit mx-auto space-y-[1.5rem] md:space-y-[2rem] pt-[clamp(2.5rem,8.5vw,5rem)]">
            <div className="rounded-[20px] p-4 sm:px-6 sm:py-5 backdrop-blur-[25px] w-full max-w-[clamp(8.8rem,26vw,10.8rem)] mx-auto text-white bg-[rgba(26,59,55,0.3)] text-center space-y-3">
              {/* Rating Block */}
              <div className="flex items-center gap-3 justify-center">
                <Google />
                <div className="text-left">
                  <p className="text-xs sm:text-sm md:text-[17px] font-medium leading-none">
                    4.8
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm md:text-[17px] leading-snug">
                Review (210)
              </p>
            </div>
            {/* Button */}
            <PrimaryButton text="Set a Meeting" />
            <div className="flex items-center gap-2">
              <Gurranty />
              <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent md:text-[18px] sm:text-[13px] text-xs text-center">
                100% Money Back Guarantee
              </p>
            </div>
          </div>

          <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[clamp(1.2rem,10vw,3rem)] text-[clamp(1rem,6vw,1.8rem)] font-semibold text-center mt-[4rem] md:mt-[6rem] xl:mt-[10rem] sm:px-6 lg:px-10">
            Visual Doar transforms your ideas into effective digital design and
            innovative development, combining creativity and technology to craft
            user-centric solutions that bring your vision to life with engaging
            and functional experiences.
          </p>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default Hero;
