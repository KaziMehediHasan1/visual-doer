"use client";
import Brand from "components/portfolio/Brand";
import Goal from "components/portfolio/Goal";
import Hero from "components/portfolio/Hero";
import React from "react";
// import Hero from "@/components/portfolio/Hero";
// import Brand from "@/components/portfolio/Brand";
// import Goal from "@/components/portfolio/Goal";


const Home = () => {
  return (
    <div>
      <Hero/>
      <Brand />
      <Goal/>
    </div>
  );
};

export default Home;
