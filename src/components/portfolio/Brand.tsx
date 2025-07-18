import React from "react";
import CommonTitle from "../reuse/CommonTitle";
import Background from "@/assets/images/mooneffect.png";
import ServiceCard from "../reuse/ServiceCard";

const Brand = () => {
  return (
    <>
      {/* brand section */}
      <section className="relative -top-96 xl:-top-64 w-full  lg:mt-[160px]">
        <div
        className="relative -top-28 w-full rotate-180 bg-no-repeat bg-center bg-contain min-[360px] 
        sm:min-h-[600px] 
        md:min-h-[700px] 
        lg:min-h-[800px] 
        xl:min-h-[900px]"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundPosition: "center ",
            backgroundSize: "contain",
          }}
        >
          <div className="rotate-180 absolute inset-0 ">
            <CommonTitle
              style="max-w-[300px]
              md:max-w-[500px] pt-[175px]"
              text="we must provide
              with your brand"
            />

            <ServiceCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
