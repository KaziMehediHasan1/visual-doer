import React from "react";
import CommonTitle from "../reuse/CommonTitle";
import Background from "@/assets/images/mooneffect.png";
const Brand = () => {
  return (
    <>
      {/* brand section */}
      <section className="relative -top-80 2xl:-top-28 w-full">
        <div
          className="relative inset-0 w-full rotate-180 bg-no-repeat bg-center bg-contain min-[360px] 
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
          <div className="rotate-180 absolute inset-0">
            <CommonTitle
              text="we must provide
              with your brand"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
