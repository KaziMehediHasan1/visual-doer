"use client";
import { useState } from "react";
import Background from "@/assets/images/noiseeffect.png";
import PrimaryLogo from "@/assets/Logo/PrimaryLogo";
import { Link } from "react-scroll";
import PrimaryButton from "../reuse/NavButton";
import ToggleBar from "@/assets/icons/ToggleBar";
import CommonWrapper from "./CommonWrapper";
import { X } from "lucide-react"; // ❗Need Lucide for close icon. Install: `npm i lucide-react`

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "about", label: "about" },
    { to: "service", label: "service" },
    { to: "work", label: "work" },
    { to: "faq", label: "faq" },
  ];

  return (
    <CommonWrapper>
      <div className="relative w-full lg:mt-12 sm:mt-10 mt-8 p-4 sm:py-5 sm:px-7">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-30 rounded-primaryRound"
          style={{ backgroundImage: `url(${Background.src})` }}
        />
        <div className="relative z-10 flex items-center justify-between">
          <PrimaryLogo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                duration={500}
                smooth={true}
                className="text-white hover:text-primary-400 cursor-pointer  transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-20"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="text-white" /> : <ToggleBar />}
          </button>

          {/* CTA Button - Desktop only */}
          <div className="hidden lg:block">
            <PrimaryButton text="Lat’s Started" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm rounded-xl mt-2 z-10 p-6 space-y-4 transition-all animate-fadeInDown">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                duration={500}
                smooth={true}
                className="block text-white text-lg capitalize cursor-pointer hover:text-accent"
                onClick={() => setIsMenuOpen(false)} // auto-close on click
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <PrimaryButton text="Lat’s Started" />
            </div>
          </div>
        )}
      </div>
    </CommonWrapper>
  );
};

export default Navbar;
