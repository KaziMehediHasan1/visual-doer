import React from "react";
import CommonTitle from "../reuse/CommonTitle";
import Background from "../../assets/images/MoonShape.png";
import ServiceCard from "../reuse/ServiceCard";

const Brand = () => {
  return (
    <section>
      <div
        className="w-full rotate-180 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundPosition: "center ",
          backgroundSize: "contain",
          minHeight: "clamp(392px, 214vw, 1200px)",
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
  );
};

export default Brand;
