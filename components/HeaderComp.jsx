"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, Globe, HomeIcon, Menu, Settings, User, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeaderComp = ({ bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 px-2 lg:pt-4 lg:px-16 md:px-16 transition-colors duration-500" style={{ backgroundColor: bgColor }}>
      <div className="hidden lg:flex justify-between items-center bg-secondary shadow-[0_0_5px_rgba(0,0,0,0.2)] border border-button/20 rounded-full px-8 py-2">
        {/* Logo - Desktop */}
        <Link href="/" className="hidden md:flex items-center gap-2 bg-secondary/80 p-2 rounded-lg">
          <Globe className="w-8 h-8" />
          <Image
            src={'/logo.png'}
            alt="Dazzle Logo"
            width={70}
            height={20}
            className="w-auto h-8"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 font-subheading text-md">
          <Link href="/about" className="relative group hover:text-button">
            About Us
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-button transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
          <Link href="/services" className="relative group hover:text-button">
            Services
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-button transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
          <Link href="/methodology" className="relative group hover:text-button">
            Methodology
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-button transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
          <button className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                         hover:from-button hover:to-button transition-all duration-300 
                         text-white px-6 py-2 rounded-3xl text-lg font-content 
                         before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                         before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                         before:transition-all before:duration-500 hover:before:left-[125%]">
            Get Started
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between bg-secondary px-4 py-2 shadow-md border border-button/20 rounded-full">
        {/* Logo - Mobile */}
        <Link href="/" className="flex items-center gap-2">
          <Globe className="w-7 h-7 text-primary" />
        </Link>

        {/* Centered Logo */}
        <Link href="/">
          <Image
            src={'/logo.png'}
            alt="Dazzle Logo"
            width={80}
            height={25}
            className="w-auto h-9"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-lg transition duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
        </button>
      </div>


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
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col text-lg gap-2 mt-4">
              <Link href="/" className="flex items-center gap-2 hover:text-button" onClick={() => setIsOpen(false)}>
                <HomeIcon className="w-5 h-5" /> Home <ChevronRight className="w-4 h-4" />
              </Link>
              <hr className="border-gray-400" />
              <Link href="/about" className="flex items-center gap-2 hover:text-button" onClick={() => setIsOpen(false)}>
                <User className="w-5 h-5" /> About Us <ChevronRight className="w-4 h-4" />
              </Link>
              <hr className="border-gray-400" />
              <Link href="/services" className="flex items-center gap-2 hover:text-button" onClick={() => setIsOpen(false)}>
                <Settings className="w-5 h-5" /> Services <ChevronRight className="w-4 h-4" />
              </Link>
              <hr className="border-gray-400" />
              <Link href="/methodology" className="flex items-center gap-2 hover:text-button" onClick={() => setIsOpen(false)}>
                <BookOpen className="w-5 h-5" /> Methodology <ChevronRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default HeaderComp;
