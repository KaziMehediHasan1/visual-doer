import Background from "@/assets/images/noiseeffect.png";
import PrimaryLogo from "@/assets/Logo/PrimaryLogo";
import CommonWrapper from "./CommonWrapper";

const Footer = () => {
  return (
    <CommonWrapper>
      <footer className="w-full relative">
        <div className="relative rounded-cardRound overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(${Background.src})`,
            }}
          />

          <div className="relative z-10 p-6 lg:p-14 text-white flex justify-between flex-col lg:flex-row gap-8">
            {/* LEFT SECTION */}
            <div className="">
              <PrimaryLogo />
              <p className="text-sm sm:text-base max-w-md">
                Get in touch with us to discuss how we can help elevate your
                brand. Our team is ready to create tailored solutions that drive
                success.
              </p>
            </div>

            {/* RIGHT SECTION (Placeholder for Now) */}
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <div>
                {/* Add links or contact info here */}
                <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Contact</h4>
                <ul className="space-y-1 text-sm">
                  <li>Email: info@yourdomain.com</li>
                  <li>Phone: +880 1234 567 890</li>
                  <li>Address: Dhaka, Bangladesh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </CommonWrapper>
  );
};

export default Footer;
