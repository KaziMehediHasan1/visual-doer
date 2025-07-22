import BlogImage from "@/assets/images/image.png";
import BlogCard from "@/components/blog/BlogCard";
import CommonTitle from "@/components/reuse/CommonTitle";
import CommonWrapper from "@/components/shared/CommonWrapper";
import Image from "next/image";
import EffectTwo from "@/assets/images/EffectTwo.png";
type PageProps = {
  params: {
    id: string;
  };
};
const BlogDetails = ({ params }: PageProps) => {
  const id = params.id;
  console.log(id, "blog details id");
  return (
    <CommonWrapper>
      <div className="max-w-[80%] mx-auto mt-16 lg:mt-24">
        {/* HEADING SECTION */}
        <section className="text-center my-[1rem] sm:my-[1.5rem] lg:my-[3.5rem] space-y-2 sm:space-y-3">
          <h1 className="text-[10px] lg:text-xs font-semibold leading-[140%] text-white">
            Latest Update
          </h1>
          <p className="text-sm lg:text-[1.3rem] font-semibold bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent">
            20- Novembar-2025
          </p>
        </section>
        {/* IMAGE SECTION */}
        <section className="relative space-y-[1rem] lg:space-y-[2rem]">
          {/* BACKGROUND EFFECT */}
          <div
            style={{
              backgroundImage: `url(${EffectTwo.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="absolute inset-0 blur-md sm:blur-none -top-24 sm:-top-32 md:-top-40 lg:-top-64 z-0 min-h-[400px] sm:min-h-[600px] lg:min-h-[800px] xl:min-h-[900px]"
          />

          {/* MAIN TITLE */}
          <h1 className="text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-center leading-[140%] font-semibold bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent relative z-10">
            Over 20 Stunning Screenshot-Based UX Design Inspirations to Elevate
            Your Digital Products in 2025.
          </h1>

          {/* FOREGROUND IMAGE */}
          <div className="relative z-10 flex justify-center">
            <Image
              src={BlogImage.src}
              alt="blog-image"
              width={800}
              height={800}
              className="w-full h-auto aspect-auto object-cover  
               mx-auto 
               rounded-[1.5rem] lg:rounded-[3rem] shadow-xl"
            />
          </div>

          {/* REPEATED TITLE BELOW IMAGE */}
          <h1 className="text-[1rem] sm:text-[1.5rem] lg:text-[2rem] leading-[140%] font-semibold bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent relative z-10">
            Over 20 Stunning Screenshot-Based UX Design Inspirations to Elevate
            Your Digital Products in 2025.
          </h1>
        </section>

        <p className="text-xs sm:text-sm leading-[180%] mt-[1rem] lg:mt-[2rem] text-white mb-[1rem] lg:mb-[2rem]">
          Founded by Liang Wenfeng in December 2023, DeepSeek quickly rolled out
          its first AI model, DeepSeek LLM, that same month. In May 2024, they
          upped their game with DeepSeek-V2.  This model stood out for its
          impressive performance and cost-effectiveness and started a price war
          in Chinas tech scene. Then, in January 2025, DeepSeek released
          DeepSeek-R1, an open-source reasoning model designed to tackle
          scientific problems. Since its release, DeepSeek has been gaining
          attention for its user-friendly approach and versatility. And the best
          part? It’s designed to grow with you, no matter what sector youre
          coming from. DeepSeek streamlines UX design by automating UI
          generation, brainstorming scenarios, enhancing research, and refining
          microcopy. It simplifies workflows, supports prototyping, and aids
          competitor analysis. To say it clearly, this tool can act as a smart
          assistant to boost efficiency, creativity, and collaboration in design
          projects. DeepSeek has some pretty awesome tricks up its sleeve. Let’s
          learn about them. Manually building UI components can be repetitive.
          DeepSeek speeds up the process by generating structured code for
          common interface elements. This approach makes collaboration with
          developers smoother. For instance, you can ask, “Generate HTML and CSS
          for a responsive navigation bar.” Even though it won’t replace Figma
          or coding completely, it helps by providing starting points. Thus, it
          can save you time while ensuring consistency across designs.
        </p>

        {/* TAGS SECTION */}
        <section className="flex flex-wrap items-center gap-3 sm:gap-8 text-white">
          {["web development", "UI/UX", "Grapics"].map((item) => {
            return (
              <p
                key={item}
                className="rounded-smcardRound py-[0.7vmax] px-[1.5vmax] text-[10px] sm:text-sm  bg-accent-foreground "
              >
                {item}
              </p>
            );
          })}
        </section>
      </div>{" "}
      {/* CARD SECTION */}
      <section className="px-4 py-8 space-y-[1rem] lg:space-y-[4rem] my-[1rem] lg:mt-[4rem]">
        <CommonTitle
          style="max-w-[300px]
             md:max-w-[400px]"
          text="here is our popular blogs"
        />
        <BlogCard id="#" />
      </section>
    </CommonWrapper>
  );
};
export default BlogDetails;
