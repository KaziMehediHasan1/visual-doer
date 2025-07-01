import Background from "@/assets/images/mooneffect.png";
const Hero = () => {
  return (
    <div className="w-full mt-10 sm:mt-[60px]">
      {/* TEXT SECTION */}
      <section className="max-w-[75%] w-full mx-auto space-y-3 sm:space-y-5">
        <h1 className="text-[38px] sm:text-[50px] lg:text-[80px] leading-[120%] font-semibold text-center bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent ">
          build the brand <br /> with visual doer agency
        </h1>
        <p className="text-center md:text-[20px] sm:text-[13px]  sm:max-w-[70%] mx-auto text-xs bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent ">
          {" "}
          Empowering businesses with cutting-edge AI technology. Transforming
          ideas into intelligent, scalable solutions.
        </p>
      </section>
      {/* REVIEW CARD */}
      <div
        className=" bg-no-repeat bg-center bg-contain  min-h-[200px] 
    sm:min-h-[600px] 
    md:min-h-[700px] 
    lg:min-h-[800px] 
    xl:min-h-[900px] "
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      >

        {/* Your content here */}
      </div>
    </div>
  );
};

export default Hero;
