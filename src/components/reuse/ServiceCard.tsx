"use client";
import React, { useState } from "react";
import RightArrow from "../../assets/icons/RightArrow";
import CommonWrapper from "../shared/CommonWrapper";
import { Button } from "../ui/button";
import PrimaryButton from "./PrimaryButton";
import { motion, AnimatePresence } from "framer-motion";
const ServiceCard = () => {
  const data = [
    { title: "Game Developer", des: "lrem10kjjjjfjakdfj" },
    { title: "Web Developer", des: "lrem10kjjjjfjakdfj" },
    { title: "App Developer", des: "lrem10kjjjjfjakdfj" },
    { title: "UI/UX Designer", des: "lrem10kjjjjfjakdfj" },
    { title: "AI Engineer", des: "lrem10kjjjjfjakdfj" },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleData = showAll ? data : data.slice(0, 3);

  return (
    <CommonWrapper>
      <div
        className={`space-y-14 py-[clamp(4rem,15vw,20rem)] ${
          showAll && "space-y-5"
        }`}
      >
        {/* Desktop / XL Grid */}
        <section className="hidden xl:grid grid-cols-3 gap-6">
          {visibleData.map((item, index) => (
            <AnimatePresence key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card title={item.title} des={item.des} />
              </motion.div>
            </AnimatePresence>
          ))}
        </section>

        {/* Mobile/Tablet horizontal scroll */}
        <section className="flex xl:hidden items-stretch gap-6  ">
          {data.map((item, index) => (
            <div className="min-w-[280px] max-w-[320px]" key={index}>
              <Card title={item.title} des={item.des} />
            </div>
          ))}
        </section>

        {/* Explore More Button only for desktop */}
        <div className="hidden xl:block text-center">
          <PrimaryButton
            text="Explore More"
            booleanText="Minimize"
            booleanTextShow={showAll}
            event={() => setShowAll(!showAll)}
          />
        </div>
      </div>
    </CommonWrapper>
  );
};

const Card = ({ title, des }: { title: string; des: string }) => {
  return (
    <div
      className="w-full p-9 mt-6 rounded-[40px] bg-[lightgray] bg-cover bg-no-repeat bg-center backdrop-blur-[10px] bg-blend-overlay h-[330px] flex flex-col justify-between"
      style={{ backgroundColor: "rgba(0, 50, 40, 0.4)" }}
    >
      {/* TOP CONTENT */}
      <div className="space-y-2">
        <h2
          className="mb-2 bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
          bg-clip-text text-transparent leading-[140%]
          w-full mx-auto text-[1.5rem] xl:text-[2rem] font-semibold"
        >
          {title}
        </h2>
        <p className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent leading-[170%] text-[1rem] font-semibold">
          {des}
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
};

export default ServiceCard;
