"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/portfolio/Hero";
import Brand from "@/components/portfolio/Brand";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
    </div>
  );
};

export default Home;
