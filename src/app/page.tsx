"use client";
import CommonWrapper from "@/components/shared/CommonWrapper";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/portfolio/Hero";
import Brand from "@/components/portfolio/Brand";

const Home = () => {
  return (
    <div>
      {" "}
      <CommonWrapper>
        <Navbar />
      </CommonWrapper>
      <Hero />
      <Brand />
    </div>
  );
};

export default Home;
