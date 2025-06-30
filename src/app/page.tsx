import DubbleQutes from "@/assets/Logo/DubbleQutes";
import Gurranty from "@/assets/Logo/Gurranty";
import PrimaryLogo from "@/assets/Logo/PrimaryLogo";
import Star from "@/assets/Logo/Star";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Home = () => {
  return (
    <div>
      <p className="text-5xl bg-black font- text-primary-400 font-sora ">
        {" "}
        visual
      </p>
      <Button
        size="lg"
        variant="outline"
        className="rounded-cardRound"
      >
        Mehedi
      </Button>
      <Input type="text" placeholder="likho" />
      <PrimaryLogo />
      <Gurranty />
      <DubbleQutes />
      <Star />
    </div>
  );
};

export default Home;
