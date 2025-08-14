import CommonWrapper from "components/shared/CommonWrapper";
import Image from "next/image";
import Mens from "assets/images/Mens.jpg";
import CommonTitle from "components/reuse/CommonTitle";
const Team = () => {
  const temas = [
    { name: "Kazi Mehedi Hasan", role: "UI/UX Designer", image: Mens },
    { name: "John Doe", role: "Frontend Developer", image: Mens },
    { name: "Jane Smith", role: "Backend Developer", image: Mens },
    { name: "Jane Smith", role: "Backend Developer", image: Mens },
  ];
  return (
    <div>
      <CommonWrapper>
        <CommonTitle
          text="our super team members"
          style="max-w-[250px] md:max-w-[370px] mx-auto"
        />
        <section className="flex items-center justify-between gap-8 w-full">
          <>
            {temas?.map((teamMember, index) => {
              return (
                <div key={index} className=" w-full max-w-[300px]">
                  <Image
                    src={Mens}
                    alt="image"
                    width={200}
                    height={200}
                    className="rounded-[40px] h-[350px] object-fill w-full"
                  />
                  <div className="text-center">
                    <h1
                      className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text
              text-transparent
              leading-[140%]
              w-full
              text-[1.1rem] font-semibold"
                    >
                      Kazi Mehedi Hasan
                    </h1>
                    <p
                      className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text
              text-transparent
              leading-[140%]
              w-full
              text-[0.9rem] font-semibold uppercase"
                    >
                      ui/ux designer
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        </section>
      </CommonWrapper>
    </div>
  );
};

export default Team;
