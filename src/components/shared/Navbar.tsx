import Background from "@/assets/images/noiseeffect.png";
import PrimaryLogo from "@/assets/Logo/PrimaryLogo";
import { Link } from "react-scroll";
import PrimaryButton from "../reuse/PrimaryButton";
import ToggleBar from "@/assets/icons/ToggleBar";

const Navbar = () => {
  return (
    <div className="relative w-full md:mt-12 sm:mt-10 mt-8 p-4 sm:py-5 sm:px-7">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-30 rounded-primaryRound"
        style={{ backgroundImage: `url(${Background.src})` }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <PrimaryLogo />
        {/* FOR DESKTOP DEVICE ONLY */}
        <div className="lg:flex items-center gap-7 hidden ">
          <Link to="about" duration={500} smooth={true} className="text-white">
            about
          </Link>
          <Link
            to="service"
            duration={500}
            smooth={true}
            className="text-white"
          >
            service
          </Link>
          <Link to="work" duration={500} smooth={true} className="text-white">
            work
          </Link>
          <Link to="work" duration={500} smooth={true} className="text-white">
            faq
          </Link>
        </div>
        {/* SMALL DEVICE ONLY */}
        <button>
          <ToggleBar />
        </button>
        <PrimaryButton text="Lat’s Started" style="hidden" />
      </div>
    </div>
  );
};

export default Navbar;
