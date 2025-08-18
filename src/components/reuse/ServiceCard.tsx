import RightArrow from "../../assets/icons/RightArrow";
import CommonWrapper from "../shared/CommonWrapper";
import { Button } from "../ui/button";
import PrimaryButton from "./PrimaryButton";

const ServiceCard = () => {
  const data = [
    {
      title: "Game Developer",
      des: "lrem10kjjjjfjakdfj",
    },
    {
      title: "Web Developer",
      des: "lrem10kjjjjfjakdfj",
    },
    {
      title: "App Developer",
      des: "lrem10kjjjjfjakdfj",
    },
  ];
  return (
    <CommonWrapper>
      <div className="space-y-14 py-5">
        
        <PrimaryButton text="Explore More" />
      </div>
    </CommonWrapper>
  );
};

export default ServiceCard;
