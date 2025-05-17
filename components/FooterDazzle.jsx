import Image from "next/image";
import Facebook from "./facebook.svg";
import Whatsapp from "./whatsapp.svg";
import Instagram from "./Insta.svg";
import Twitter from "./twitter.svg";
import Linkedin from "./linkedin.svg";
import { Globe, Mail } from "lucide-react";
import Link from "next/link";

const FooterDazzle = () => {
  const socialIcons = [
    { src: Whatsapp, alt: "Whatsapp", href: "https://wa.me/your-number" },
    { src: Facebook, alt: "Facebook", href: "https://facebook.com/your-page" },
    { src: Mail, alt: "Email", href: "mailto:dazzle.outreach@gmail.com", isIcon: true },
    { src: Linkedin, alt: "Linkedin", href: "https://www.linkedin.com/company/dazzle-consulting-global/?viewAsMember=true" },
    { src: Instagram, alt: "Instagram", href: "https://www.instagram.com/dazzle.consulting?igsh=MWEybno4cHJ0a2dhMA%3D%3D&utm_source=qr" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map(({ src, alt, href, isIcon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/80 transition-colors cursor-pointer"
              aria-label={alt}
            >
              {isIcon ? (
                // Lucide icon (Mail)
                // <src className="w-5 h-5 text-white" />
                <Mail className="w-5 h-5 text-black" />
              ) : (
                // Static image (SVG)
                <Image src={src} alt={alt} width={20} height={20} />
              )}
            </a>
          ))}
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center text-center">
          <Link href="/">
            <Image
              src={"./logo-final.svg"}
              alt="Dazzle Logo"
              width={100}
              height={80}
              className="w-auto h-16 [filter:invert(90%)_grayscale(100%)]"
            />
          </Link>
          <div className="text-sm opacity-70 font-subheading">
            Data in Action, Strategy in Motion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDazzle;
