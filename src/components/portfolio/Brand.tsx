import React from "react";
import CommonTitle from "../reuse/CommonTitle";
import Background from "../../assets/images/MoonShape.png";
import ServiceCard from "../reuse/ServiceCard";

const Brand = () => {
  return (
    <>
      {/* brand section */}
      <section>
        <div
        className="relative top-10 w-full rotate-180 bg-no-repeat bg-center bg-contain min-[360px] 
        sm:min-h-[600px] 
        md:min-h-[700px] 
        lg:min-h-[750px]"
        style={{
            backgroundImage: `url(${Background.src})`,
            backgroundPosition: "center ",
            backgroundSize: "contain",
        }}
        >
          <div className="rotate-180 absolute inset-0">
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
