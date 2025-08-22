import Google from "../../assets/icons/Google";
import Background from "../../assets/images/MoonShape.png";
import Star from "../../assets/Logo/Star";
import CommonWrapper from "../shared/CommonWrapper";
import Gurranty from "../../assets/Logo/Gurranty";
import PrimaryButton from "../reuse/PrimaryButton";
import CommonTitle from "components/reuse/CommonTitle";

const Hero = () => {
  return (
    <div>
      {/* TEXT SECTION */}
      <section className="space-y-3 md:space-y-5 mt-[clamp(40px,5vw,80px)] w-full max-w-[85%] xl:max-w-[75%] mx-auto">
        <h1 className="text-[clamp(48px,calc(37.3333px+3.33333vw),80px)] leading-[clamp(1.2em,1.35em,1.4em)] font-semibold text-center bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent">
          build the brand <br /> with visual doer agency
        </h1>
        <p className="text-center text-[clamp(18px,calc(16px+0.5vw),24px)] w-[90%] sm:w-[min(calc(100%-200px),900px)] mx-auto bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent">
          Empowering businesses with cutting-edge AI technology. Transforming
          ideas into intelligent, scalable solutions.
        </p>
      </section>

      {/* REVIEW + BG SECTION */}
      <div
        className="w-full bg-no-repeat bg-contain relative"
        style={{
          minHeight: "clamp(392px, 80vh, 1200px)",
          backgroundImage: `url(${Background.src})`,
        }}
      >
        <CommonWrapper>
          {/* Review + Button */}
          <div className="w-fit mx-auto space-y-[1.5rem] md:space-y-[2.5rem] pt-[clamp(2.5rem,8.5vw,7rem)]">
            <div className="rounded-[20px] p-4 sm:px-6 sm:py-5 backdrop-blur-[25px] w-full max-w-[clamp(8.8rem,26vw,10.8rem)] mx-auto text-white bg-[rgba(21,43,40,0.3)] text-center space-y-3">
              {/* Rating Block */}
              <div className="flex items-center gap-3 justify-center">
                <Google />
                <div className="text-left">
                  <p className="text-xs sm:text-sm md:text-[17px] leading-none">
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
              <p className="text-xs sm:text-sm md:text-[17px]">Review (210)</p>
            </div>

            {/* CTA Button */}
            <PrimaryButton text="Set a Meeting" />

            {/* Guarantee */}
            <div className="flex items-center gap-2 justify-center">
              <Gurranty />
              <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent text-[18px] xl:text-[1.5rem]">
                100% Money Back Guarantee
              </p>
            </div>
          </div>

          {/* Main Description */}
          <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent text-[clamp(24px,4vw,32px)] leading-[clamp(1.4em,1.6em,1.7em)] font-semibold text-center mt-[clamp(5rem,12vw,17rem)] sm:px-6 lg:px-10 max-w-[min(calc(100%-100px),1100px)] mx-auto">
            Visual Doar transforms your ideas into effective digital design and
            innovative development, combining creativity and technology to craft
            user-centric solutions that bring your vision to life with engaging
            and functional experiences.
          </p>
        </CommonWrapper>

        {/* Service Section with Background */}
        <section
          className="w-full rotate-180 bg-no-repeat bg-contain mt-[20px] "
          style={{
            backgroundImage: `url(${Background.src})`,
            minHeight: "clamp(392px, 80vh, 1200px)",
          }}
        >
          <div className="rotate-180 absolute inset-0">
            <CommonTitle
              style="xl:pt-[175px] sm:pt-[85px] pt-[55px] max-w-[350px] sm:max-w-[500px] xl:max-w-[600px]"
              text="we must provide with your brand"
            />
            {/* <ServiceCard /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
