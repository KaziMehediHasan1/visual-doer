"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/portfolio/Hero";
import Brand from "@/components/portfolio/Brand";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <Footer />
    </div>
  );
};

export default Home;
