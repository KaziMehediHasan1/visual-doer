import CommonTitle from "components/reuse/CommonTitle";
import CommonWrapper from "components/shared/CommonWrapper";
import Background from "assets/images/EffectTwo.png";
import { useState } from "react";
import TopArrow from "assets/icons/TopArrow";
import { cn } from "lib/utils";
import { Separator } from "components/ui/separator";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faq = [
    {
      question: "What is the purpose of this portfolio?",
      answer:
        "This portfolio showcases my skills and projects in web development.",
    },
    {
      question: "What is the purpose of this portfolio?",
      answer:
        "This portfolio showcases my skills and projects in web development.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach me through the contact form on this website or via email.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach me through the contact form on this website or via email.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I primarily work with React, Next.js, and Tailwind CSS for web development.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I primarily work with React, Next.js, and Tailwind CSS for web development.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <CommonWrapper>
      <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full min-h-[400px] sm:min-h-[600px] lg:min-h-[800px] xl:min-h-[1050px]"
      >
        <div className="w-full">
          <CommonTitle
            text="frequently asked questions"
            style="max-w-[200px] md:max-w-[500px] mx-auto"
          />

          <div className="mt-10 w-[70%] mx-auto">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="mb-4 space-y-3">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="text-white w-full"
                  >
                    <div className="flex items-center justify-between w-full">
                      <h1
                        className={cn(
                          isOpen &&
                            "bg-[linear-gradient(225deg,#E6FAF7_0%,#00D1AE_90.38%)] bg-clip-text text-transparent leading-[140%] font-semibold "
                        )}
                      >
                        {item.question}
                      </h1>
                      <TopArrow
                        style={`rotate-180  ${
                          isOpen && "rotate-0 transition-transform duration-300"
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-linear",
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-white/70 text-[0.8rem] pb-3">
                      {item.answer}
                    </p>
                  </div>
                  <Separator className="w-full h-[2px] bg-gradient-to-r from-black/30 via-primary-700 to-black/30" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Faq;
