import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-4 lg:px-16 bg-[#FDF6EC]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Globe className="w-8 h-8" />
        <span className="font-semibold font-logo text-2xl">DAZZLE</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="p-2 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-8 font-subheading text-md">
        <a href="#" className="hover:text-[#B8860B]">Services</a>
        <a href="#" className="hover:text-[#B8860B]">About</a>
        <a href="#" className="hover:text-[#B8860B]">Contact</a>
        <button className="bg-[#B8860B] hover:bg-[#8B6508] px-4 py-2 rounded-md text-white">
          Get Started
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed top-0 left-0 w-full bg-[#FDF6EC] shadow-md flex flex-col items-center gap-6 p-6 z-50 lg:hidden"
          >
            <button className="self-end p-2" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <a href="#" className="hover:text-[#B8860B] text-xl font-subheading">Services</a>
            <a href="#" className="hover:text-[#B8860B] text-xl font-subheading">About</a>
            <a href="#" className="hover:text-[#B8860B] text-xl font-subheading">Contact</a>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default HeaderComp;
