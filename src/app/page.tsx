"use client";
import CommonWrapper from "@/components/shared/CommonWrapper";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/portfolio/Hero";

const Home = () => {
  return (
    <div>
      {" "}
      <CommonWrapper>
        <Navbar />
      </CommonWrapper>
      <Hero />
    </div>
  );
};

export default Home;
