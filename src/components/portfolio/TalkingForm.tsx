import CommonWrapper from "components/shared/CommonWrapper";
import MoonShape from "assets/images/MoonShape.png";
import React from "react";
import CommonTitle from "components/reuse/CommonTitle";
import Mail from "assets/icons/Mail";
import Phone from "assets/icons/Phone";
import Address from "assets/icons/Address";
import PrimaryButton from "components/reuse/PrimaryButton";
import SecondaryButton from "components/reuse/SecondaryButton";
import NavButton from "components/reuse/NavButton";
const TalkingForm = () => {
  const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);
  };
  return (
    <div className="w-full">
      <section
        className="relative w-full bg-no-repeat bg-center bg-contain min-[360px] 
          sm:min-h-[600px] 
          md:min-h-[700px]
          lg:min-h-[1400px]"
        style={{
          backgroundImage: `url(${MoonShape.src})`,
          backgroundPosition: "center",
          backgroundSize: "140%",
        }}
      >
        {/* TEXT SECTION */}
        <section className=" w-full absolute inset-0">
          <CommonWrapper>
            <div
              className="w-full mt-56 p-10 rounded-[40px] bg-[lightgray] bg-cover bg-no-repeat bg-center backdrop-blur-[10px] space-y-[0.6rem]"
              style={{ backgroundColor: "rgba(0, 50, 40, 0.4)" }}
            >
              <section className="flex gap-5 w-full">
                {/*  TEXT SECTION */}
                <div className="space-y-3 w-1/2">
                  <h1
                    className="bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
             bg-clip-text
             text-transparent
             leading-[140%]
             w-full
             mx-auto
             text-[2.5rem]
             font-semibold
             "
                  >
                    Let’s Talk About Your Project
                  </h1>
                  <p className="leading-[140%] text-[1rem] text-white/80">
                    Get in touch with us to discuss how we can help elevate your
                    brand. Our team is ready to create tailored solutions that
                    drive success.
                  </p>
                  {/* INFO */}
                  <section className="space-y-3 sm:space-y-4 text-white/80">
                    <div className="flex items-center gap-x-4 leading-[170%]">
                      <Mail />{" "}
                      <p className="text-sm sm:text-base">
                        aigency.contact@gmailcom
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4 leading-[170%]">
                      <Phone />
                      <p className="text-sm sm:text-base">+000 999 999 999</p>
                    </div>
                    <div className="flex  gap-x-4 leading-[170%]">
                      <Address />
                      <p className="text-sm sm:text-base">
                        123 Innovation Street, Suite 456, Tech City, <br /> TX
                        75001, USA.
                      </p>
                    </div>
                  </section>
                </div>
                <form
                  action=""
                  onSubmit={handleFormData}
                  className="text-white w-1/2 space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="border-[1px] border-primary-400 p-2 rounded-sm w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="border-[1px] border-primary-400 p-2 rounded-sm w-full"
                  />
                  <input
                    type="tel"
                    placeholder="What’s app Number (Optional)"
                    className="border-[1px] border-primary-400 p-2 rounded-sm w-full"
                  />
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="border-[1px] border-primary-400 p-2 rounded-sm w-full"
                  />
                  <textarea
                    placeholder="Project Details...*"
                    className="border-[1px] border-primary-400 p-2 rounded-sm w-full"
                    rows={5}
                  />
                  <NavButton text="Get in Touceh" />
                </form>
              </section>
            </div>
          </CommonWrapper>
        </section>
      </section>
    </div>
  );
};

export default TalkingForm;
