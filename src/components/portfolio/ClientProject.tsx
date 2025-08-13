import CommonTitle from "components/reuse/CommonTitle";
import { Button } from "components/ui/button";
import LeftArrow from "assets/icons/LeftArrow";
import RightArrow from "assets/icons/RightArrow";
import SlideImage from "assets/images/image.png";
import Image from "next/image";
import CommonWrapper from "components/shared/CommonWrapper";
const ClientProject = () => {
  return (
    <CommonWrapper>
      <div>
        <CommonTitle
          text="our latest clients project"
          style="max-w-[200px] md:max-w-[400px] mx-auto"
        />
        <section className="flex gap-10 items-center justify-center">
          <Button
            size="lg"
            className="rounded-primaryRound cursor-pointer w-12 h-12    transform duration-300 hover:-rotate-6"
          >
            <LeftArrow />
          </Button>
          <div className="w-full relative rounded-primaryRound">
            <Image
              width={300}
              height={300}
              src={SlideImage}
              alt="image"
              className="w-full h-full max-h-[500px] object-contain "
            />
            <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-primaryRound cursor-pointer transform duration-300 bg-gradient-to-tr from-primary-600 to-white/90 text-black font-extrabold p-5 border-primary-300 border-[1px]">
              Project Details
            </Button>
          </div>

          <Button
            size="lg"
            className=" rounded-primaryRound cursor-pointer w-12 h-12    transform duration-300 hover:rotate-6"
          >
            <RightArrow />
          </Button>
        </section>
      </div>
    </CommonWrapper>
  );
};

export default ClientProject;
