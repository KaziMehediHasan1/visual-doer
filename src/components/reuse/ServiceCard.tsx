import RightArrow from "../../assets/icons/RightArrow";
import CommonWrapper from "../shared/CommonWrapper";
import { Button } from "../ui/button";
import PrimaryButton from "./PrimaryButton";

const ServiceCard = () => {
  const data = [
    {
      title: "Game Developer",
      des: "lrem10kjjjjfjakdfj",
    },
    {
      title: "Web Developer",
      des: "lrem10kjjjjfjakdfj",
    },
    {
      title: "App Developer",
      des: "lrem10kjjjjfjakdfj",
    },
  ];
  return (
    <CommonWrapper>
      <div className="space-y-14 py-5">
        <section className="flex items-center gap-6">
          {data?.map((Item, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[360px] p-9 mt-16 rounded-[40px] bg-[lightgray] bg-cover bg-no-repeat bg-center backdrop-blur-[10px] bg-blend-overlay xl:h-[330px] flex flex-col justify-between"
                style={{ backgroundColor: "rgba(0, 50, 40, 0.4)" }}
              >
                {/* TOP CONTENT */}
                <div className="space-y-2">
                  <h2
                    className="mb-2 bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
                    bg-clip-text
                    text-transparent
                    leading-[140%]
                    w-full
                    mx-auto text-[1.5rem] xl:text-[2rem] font-semibold"
                  >
                    {Item.title}
                  </h2>
                  <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[170%] text-[1rem] font-semibold">
                    This is your custom card content with a blurred background
                    and image overlay.
                  </p>
                </div>

                {/* BUTTON AT BOTTOM */}
                <Button
                  size="lg"
                  className="group rounded-primaryRound cursor-pointer bg-white/10 w-12 h-12 hover:bg-gradient-to-tr hover:to-primary-200 hover:from-primary-500 transform duration-300 hover:rotate-6"
                >
                  <RightArrow style="group-hover:text-black" />
                </Button>
              </div>
            );
          })}
        </section>
        <PrimaryButton text="Explore More" />
      </div>
    </CommonWrapper>
  );
};

export default ServiceCard;
