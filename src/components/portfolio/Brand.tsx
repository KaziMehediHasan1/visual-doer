import React from "react";
import CommonWrapper from "../shared/CommonWrapper";
import CommonTitle from "../reuse/CommonTitle";

const Brand = () => {
  return (
    <CommonWrapper>
   
        {/* brand section */}
        <section className="mt-16 sm:mt-0 2xl:mt-[160px] max-w-fit mx-auto">
          <CommonTitle
            text="we must provide
              with your brand"
          />

          <div className="text-white"></div>
        </section>
     
    </CommonWrapper>
  );
};

export default Brand;
