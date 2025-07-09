import BlogImage from "@/assets/images/image.png";
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
      <div className="text-white text-center">
        {/* DATE AND TIME */}
        <section className="text-center">
          <h1>Last date 12</h1>
          <p>Updated date holo janina</p>
        </section>
        {/* Title */}
        <h1 className="text-[.7rem] lg:text-[2rem] leading-[140%] font-semibold max-w-[70%] mx-auto">
          Over 20 Stunning Screenshot-Based UX Design Inspirations to Elevate
          Your Digital Products in 2025.{" "}
        </h1>
        {/* Images */}
        <Image
          src={BlogImage.src}
          alt="blog-image"
          width={200}
          height={200}
          style={{
            height: "30vhmax",
            width: "30vw",
            objectFit: "contain",
            margin: "auto",
          }}
        />
        {/* subtitle */}
        <h1 className="text-[1.5rem] leading-[140%] font-semibold max-w-[70%] mx-auto">
          Over 20 Stunning Screenshot-Based UX Design Inspirations to Elevate
          Your Digital Products in 2025.{" "}
        </h1>
        {/* paragrap */}
        <p>
          Founded by Liang Wenfeng in December 2023, DeepSeek quickly rolled out
          its first AI model, DeepSeek LLM, that same month. In May 2024, they
          upped their game with DeepSeek-V2.  This model stood out for its
          impressive performance and cost-effectiveness and started a price war
          in China's tech scene. Then, in January 2025, DeepSeek released
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
        <section className="flex items-center gap-8">
          <p className="rounded-smcardRound p-3 bg-accent-foreground ">
            log tags
          </p>
          <p className="rounded-smcardRound p-3 bg-accent-foreground ">
            log tags
          </p>
          <p className="rounded-smcardRound p-3 bg-accent-foreground ">
            log tags
          </p>
          <p className="rounded-smcardRound p-3 bg-accent-foreground ">
            log tags
          </p>
        </section>
      </div>
    </CommonWrapper>
  );
};
export default BlogDetails;
