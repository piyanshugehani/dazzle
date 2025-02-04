import { useState } from "react";
import { BookOpen, ChevronRight, Globe, Menu, Settings, User, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 md:p-4 lg:px-16 bg-secondary shadow-sm border-b-2 border-gray-300/50 ">
  {/* Logo - Desktop */}
  <div className="hidden md:flex items-center gap-2 bg-secondary/80 p-2 rounded-lg">
    <Globe className="w-8 h-8" />
    <Image
      src={'./logo.png'}
      alt="Dazzle Logo"
      width={70}
      height={20}
      className="w-auto h-8"
    />
  </div>

  {/* Logo - Mobile */}
  <div className="md:hidden flex items-center gap-2">
    <Globe className="w-8 h-8" />
    <Image
      src={'./logo.png'}
      alt="Dazzle Logo"
      width={70}
      height={20}
      className="w-auto h-8"
    />
  </div>

  {/* Mobile Menu Button */}
  <button className="p-2 lg:hidden " onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>

  {/* Desktop Menu */}
  <nav className="hidden lg:flex items-center gap-10 font-subheading text-md ">
    <a href="#" className="hover:text-button">About Us</a>
    <a href="#" className="hover:text-button">Services</a>
    <a href="#" className="hover:text-button">Methodology</a>
    <button className="bg-gradient-to-br from-orange-600 via-button to-button hover:bg-[#8B6508] px-4 py-2 rounded-md text-white">
      Get Started
    </button>
  </nav>

  {/* Mobile Menu */}
  {isOpen && (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsOpen(false)}
      />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 10 }}
        className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-secondary shadow-md flex flex-col gap-4 p-6 z-50 border-l border-gray-300/50"
      >
        <div className="flex justify-end items-center">
          <button onClick={() => setIsOpen(false)} >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col text-lg gap-2 mt-4 ">
          <a href="#" className="flex items-center gap-2 hover:text-button">
            <User className="w-5 h-5" /> About Us <ChevronRight className="w-4 h-4" />
          </a>
          <hr className="border-gray-400" />
          <a href="#" className="flex items-center gap-2 hover:text-button">
            <Settings className="w-5 h-5" /> Services <ChevronRight className="w-4 h-4" />
          </a>
          <hr className="border-gray-400" />
          <a href="#" className="flex items-center gap-2 hover:text-button">
            <BookOpen className="w-5 h-5" /> Methodology <ChevronRight className="w-4 h-4" />
          </a>
        </nav>
      </motion.div>
    </>
  )}
</header>

  );
};

export default HeaderComp;
