import Image from "next/image";
import Facebook from "./facebook.svg";
import Whatsapp from "./whatsapp.svg";
// import Instagram from "./../public/insta.svg";
import Instagram from "./Insta.svg"
import Twitter from "./twitter.svg"
import Linkedin from "./linkedin.svg";
import { Globe } from "lucide-react";

const FooterDazzle = () => {
  const socialIcons = [
    { src: Whatsapp, alt: "Whatsapp" },
    { src: Facebook, alt: "Facebook" },
    { src: Twitter, alt: "Twitter" },
    { src: Linkedin, alt: "Linkedin" },
    { src: Instagram, alt: "Instagram" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map(({ src, alt }, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/80 transition-colors cursor-pointer"
            >
              <Image src={src} alt={alt} width={20} height={20} />
            </div>
          ))}
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Globe className="w-8 h-8" />
          <div className="font-semibold text-xl">DAZZLE</div>
          <div className="text-sm opacity-70">A Market Research Company</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDazzle;
