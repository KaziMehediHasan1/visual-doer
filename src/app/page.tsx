import PrimaryLogo from "@/assets/Logo/PrimaryLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Home = () => {
  return (
    <div>
      Home
      <Button size="lg" variant="outline">
        Mehedi
      </Button>
      <Input type="text" placeholder="likho" />
      <PrimaryLogo/>
    </div>
  );
};

export default Home;
