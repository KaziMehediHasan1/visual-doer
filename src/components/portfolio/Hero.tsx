import Google from "@/assets/icons/Google";
import Background from "@/assets/images/mooneffect.png";
import Star from "@/assets/Logo/Star";
import CommonWrapper from "../shared/CommonWrapper";
import Gurranty from "@/assets/Logo/Gurranty";
import PrimaryButton from "../reuse/PrimaryButton";
const Hero = () => {
  return (
    <div className="w-full mt-10 sm:mt-[60px] ">
      {/* TEXT SECTION */}
      <section className="max-w-[75%] w-full mx-auto space-y-3 sm:space-y-5">
        <h1 className="text-[4.5vmax] leading-[120%] font-semibold text-center bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent">
          build the brand <br /> with visual doer agency
        </h1>
        <p className="text-center md:text-[18px] sm:text-[13px] text-xs sm:max-w-[70%] mx-auto bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[140%]">
          {" "}
          Empowering businesses with cutting-edge AI technology. Transforming
          ideas into intelligent, scalable solutions.
        </p>
      </section>
      {/* REVIEW CARD */}
      <div
        className="w-full bg-no-repeat bg-center bg-contain min-h-[360px] 
        sm:min-h-[600px] 
        md:min-h-[700px] 
        lg:min-h-[800px] 
        xl:min-h-[900px]"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundPosition: "center top",
          backgroundSize: "contain",
        }}
      >
        <CommonWrapper>
          <div className="max-w-fit mx-auto space-y-8 lg:space-y-12 pt-12 lg:pt-28">
            <div className="rounded-[20px] p-4 sm:px-6 sm:py-5  backdrop-blur-[70px] w-fit mx-auto text-white text-center space-y-3">
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

              {/* Button */}
            </div>
            <PrimaryButton text="Set a Meeting" />
            <div className="flex items-center gap-2 relative">
              <Gurranty />
              <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent md:text-[18px] sm:text-[13px] text-xs">
                100% Money Back Guarantee
              </p>
            </div>
          </div>

          <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[140%] text-[18px] sm:text-[24px] lg:text-[26px] font-semibold text-center max-w-[80%] mx-auto mt-10 md:mt-[160px]">
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
