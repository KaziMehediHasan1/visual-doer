import PrimaryLogo from "@/assets/Logo/PrimaryLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Home = () => {
  return (
    <div>
     <p className="text-5xl bg-black font- text-primary-400 font-sora "> visual</p>
      <Button size="lg" variant="outline">
        Mehedi
      </Button>
      <Input type="text" placeholder="likho" />
      <PrimaryLogo/>
    </div>
  );
};

export default Home;
