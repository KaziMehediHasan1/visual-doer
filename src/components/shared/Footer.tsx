import Background from "../../assets/images/noiseeffect.png";
import PrimaryLogo from "../../assets/Logo/PrimaryLogo";
import CommonWrapper from "./CommonWrapper";
import Mail from "../../assets/icons/Mail";
import Phone from "../../assets/icons/Phone";
import Address from "../../assets/icons/Address";
import Facebook from "../../assets/icons/Facebook";
import Linkedin from "../../assets/icons/Linkedin";
import Dribble from "../../assets/icons/Dribble";
import Behance from "../../assets/icons/Behance";
import EffectTwo from "../../assets/images/EffectTwo.png";
import Instagram from "../../assets/icons/Instagram";

const Footer = () => {
  return (
    <CommonWrapper>
      <footer className="w-full relative mb-16 ">
        <div
          style={{
            backgroundImage: `url(${EffectTwo.src})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="absolute top-36 md:top-10 lg:top-16 left-0 w-full h-full z-0 blur-sm sm:blur-none opacity-50 pointer-events-none"
        />

        <div className="relative z-30 rounded-cardRound overflow-hidden p-6 lg:p-14">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(${Background.src})`,
            }}
          />

          <div className="relative z-10  text-white flex justify-between flex-col lg:flex-row gap-8">
            {/* LEFT SECTION */}
            <div className="space-y-3 sm:space-y-6">
              <PrimaryLogo />
              <p className="text-sm sm:text-base max-w-md leading-[170%]">
                Get in touch with us to discuss how we can help elevate your
                brand. Our team is ready to create tailored solutions that drive
                success.
              </p>

              {/* INFO */}
              <section className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-x-4 leading-[170%]">
                  <Mail />{" "}
                  <p className="text-sm sm:text-base">
                    aigency.contact@gmailcom
                  </p>
                </div>
                <div className="flex items-center gap-x-4 leading-[170%]">
                  <Phone />
                  <p className="text-sm sm:text-base">+000 999 999 999</p>
                </div>
                <div className="flex  gap-x-4 leading-[170%]">
                  <Address />
                  <p className="text-sm sm:text-base">
                    123 Innovation Street, Suite 456, Tech City, <br /> TX
                    75001, USA.
                  </p>
                </div>
              </section>
            </div>

            {/* RIGHT SECTION (Placeholder for Now) */}
            <div className="flex justify-baseline gap-8">
              <div className="space-y-3 sm:space-y-4 ">
                {/* Add links or contact info here */}
                <h4 className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent  leading-[170%]">
                  social accounts
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="https://www.facebook.com/thevisualdoer"
                      className="hover:underline flex items-center gap-x-2 leading-[170%]"
                    >
                      <Facebook /> <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/thevisualdoer"
                      className="hover:underline flex items-center gap-x-2 leading-[170%]"
                    >
                      <Instagram />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/thevisualdoer"
                      className="hover:underline flex items-center gap-x-2 leading-[170%]"
                    >
                      <Linkedin /> <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/thevisualdoer"
                      className="hover:underline flex items-center gap-x-2 leading-[170%]"
                    >
                      <Dribble /> <span>Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/thevisualdoer"
                      className="hover:underline flex items-center gap-x-2 leading-[170%]"
                    >
                      <Behance /> <span>Behance</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text text-transparent  leading-[170%]">
                  quick link
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="" className="leading-[170%]">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="" className="leading-[170%]">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="" className="leading-[170%]">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="" className="leading-[170%]">
                      Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-white my-4 text-xs lg:text-sm text-center sm:text-end leading-[170%]">
            © 2025, Visual Doer, All Rights Reserved.
          </p>
        </div>
      </footer>
    </CommonWrapper>
  );
};

export default Footer;
