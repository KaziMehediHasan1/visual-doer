import CommonTitle from "components/reuse/CommonTitle";
import BGImage from "assets/images/MoonShape.png";
import DubbleQutes from "assets/Logo/DubbleQutes";
import CommonWrapper from "components/shared/CommonWrapper";
import Star from "assets/Logo/Star";
const Feedback = () => {
  return (
    <>
      <div className="overflow-hidden w-full">
        {/* BACKGROUND SECTION */}
        <section
          className="relative top-10 w-full rotate-180 bg-no-repeat bg-center bg-contain min-[360px] 
          sm:min-h-[600px] 
          md:min-h-[700px] 
          lg:min-h-[750px]"
          style={{
            backgroundImage: `url(${BGImage.src})`,
            backgroundPosition: "center ",
            backgroundSize: "contain",
          }}
        >
          {/* TEXT SECTION */}
          <section className=" rotate-180 w-full absolute inset-0">
            <CommonTitle
              text="our reputed clients feedback"
              style="max-w-[250px] md:max-w-[450px] mx-auto"
            />{" "}
            <CommonWrapper>
              <div
                className="w-full max-w-[600px] mx-auto mt-56 p-9 rounded-[40px] bg-[lightgray] bg-cover bg-no-repeat bg-center backdrop-blur-[10px] bg-blend-overlay space-y-[0.6rem]"
                style={{ backgroundColor: "rgba(0, 50, 40, 0.4)" }}
              >
                <DubbleQutes />
                <p className="text-white text-center">
                  “ Explore our practice areas that suit your needs. Our
                  experienced lawyers at Extent Corporate Advisory law firm has
                  successfully helped dozens of major corporations and
                  businesses in many countries. ”
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <section className="text-white flex items-center justify-center gap-6">
                  <div>
                    <h1>Kazi Mehedi Hasan</h1>
                    <p>CEO & Co Founder</p>
                  </div>
                  <div className="h-12 w-[1px] bg-white/80" />
                  <div>
                    <h2>Company</h2>
                  </div>
                </section>
              </div>
            </CommonWrapper>
          </section>
        </section>
      </div>
    </>
  );
};

export default Feedback;
