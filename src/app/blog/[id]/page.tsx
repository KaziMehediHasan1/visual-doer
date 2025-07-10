import BlogImage from "@/assets/images/image.png";
import CommonTitle from "@/components/reuse/CommonTitle";
import CommonWrapper from "@/components/shared/CommonWrapper";
import Image from "next/image";

type BlogDetailProps = {
  params: {
    id: string;
  };
};

const BlogDetails = async ({ params }: BlogDetailProps) => {
  const id = params.id;

  console.log("Blog ID:", id);

  return (
    <CommonWrapper>
      <div className=" w-full sm:max-w-[80%] mx-auto">
        {/* DATE AND TIME */}
        <section className="text-center my-[1rem] sm:my-[1.5rem] lg:my-[3.5rem] space-y-2 sm:space-y-3">
          <h1 className="text-sm leading-[140%] text-white">Last date 12</h1>
          <p className="text-[1rem] sm:text-[1.5rem] bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent">
            Updated date holo janina
          </p>
        </section>
        <section className="space-y-[1rem] lg:space-y-[2rem]">
          <h1 className="text-[2vmax] text-center leading-[140%] font-semibold bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent">
            Over 20 Stunning Screenshot-Based UX Design Inspirations to Elevate
            Your Digital Products in 2025.{" "}
          </h1>
          <div>
            <Image
              src={BlogImage.src}
              alt="blog-image"
              width={200}
              height={200}
              className="w-full object-cover mx-auto rounded-[1.5rem] lg:rounded-[2.5rem]"
            />
          </div>

          <h1 className="text-[1.5vmax] text-center leading-[140%] font-semibold bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent ">
            Over 20 Stunning Screenshot-Based UX Design Inspirations to Elevate
            Your Digital Products in 2025.{" "}
          </h1>
        </section>
        {/* paragrap */}
        <p className="text-sm leading-[170%] mt-[1rem] lg:mt-[2rem] text-white mb-[1rem] lg:mb-[2rem]">
          Founded by Liang Wenfeng in December 2023, DeepSeek quickly rolled out
          its first AI model, DeepSeek LLM, that same month. In May 2024, they
          upped their game with DeepSeek-V2.  This model stood out for its
          impressive performance and cost-effectiveness and started a price war
          in Chinas tech scene. Then, in January 2025, DeepSeek released
          DeepSeek-R1, an open-source reasoning model designed to tackle
          scientific problems. Since its release, DeepSeek has been gaining
          attention for its user-friendly approach and versatility. And the best
          part? It’s designed to grow with you, no matter what sector you're
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
        {/* TAGs */}
        <section className=" flex flex-wrap items-center gap-3 sm:gap-8 text-white">
          <p className="rounded-smcardRound px-4 py-2 lg:py-3 lg:px-7  bg-accent-foreground ">
            log tags
          </p>
          <p className="rounded-smcardRound px-4 py-2 lg:py-3 lg:px-7  bg-accent-foreground ">
            log tags
          </p>
          <p className="rounded-smcardRound px-4 py-2 lg:py-3 lg:px-7  bg-accent-foreground ">
            log tags
          </p>
          <p className="rounded-smcardRound px-4 py-2 lg:py-3 lg:px-7  bg-accent-foreground ">
            log tags
          </p>
        </section>
        {/* BLOGS CARD */}
        <section className="px-4 py-8">
          <CommonTitle text="here is our popular blogs" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Image
                key={index}
                src={BlogImage.src}
                alt={`blog-${index}`}
                width={400}
                height={300}
                className="w-full mx-w-1/3 aspect-[4/3] object-cover rounded-smcardRound"
              />
            ))}
          </div>
        </section>
      </div>
    </CommonWrapper>
  );
};
export default BlogDetails;
