"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IndustrySlider } from "./components/industry-slider";
import { MarqueeDemo } from "./components/MarqueeComp";
import CaseStudies from "./components/CaseStudyComp";
import FieldProtocols from "./components/ProtocolComp";
import FooterDazzle from "./components/FooterDazzle";
import HeaderComp from "./components/HeaderComp";
import { BoxReveal } from "./components/DecryptedText";
import { HeroVideoDialog } from "./components/hero";
import { LogoCarouselDemo } from "./components/Support";
import { ProfessionalFluidEffect } from "./components/ui/red-splash-cursor";
import { HeroScrollWithVideo } from "./components/HeroScroll";

export default function Home() {
  const [colorIntensity, setColorIntensity] = useState(0.3);
  const [opacity, setOpacity] = useState(0.7);
  const [pointerEvents, setPointerEvents] = useState(true);
  const unlockRef = useRef(null);
  const fieldProtocolRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: unlockRef,
    offset: ["start center", "start center"],
  });

  // Interpolating background color transition
  const bgMotionValue = useTransform(scrollYProgress, [0, 1], ["#FFFFFF", "#F8E6E9"]);

  // State to store extracted color string
  const [bgColor, setBgColor] = useState("#FFFFFF");

  // Extract color from motion value and update state
  useEffect(() => {
    const unsubscribe = bgMotionValue.on("change", (latest) => {
      setBgColor(latest);
    });
    return () => unsubscribe();
  }, [bgMotionValue]);

  // Detect if the FieldProtocols section is reached
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("#FFFFFF"); // Reset to first color
        }
      },
      { threshold: 0.1 }
    );

    if (fieldProtocolRef.current) {
      observer.observe(fieldProtocolRef.current);
    }
    return () => {
      if (fieldProtocolRef.current) {
        observer.unobserve(fieldProtocolRef.current);
      }
    };
  }, []);

  // Animation variants
  const fadeInSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen transition-colors duration-500"
    >
      {/* Header */}
      <HeaderComp bgColor={bgColor} />

      {/* Background Effect */}
      <ProfessionalFluidEffect
        colorIntensity={colorIntensity}
        opacity={opacity}
        pointerEvents={pointerEvents}
        zIndex={-1}
      />

      {/* Hero Section - Only Dazzle Text & Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: false, amount: 0.5 }}
        className=" py-12 md:py-24 lg:min-h-[80vh] flex flex-col justify-center items-center "
      >
        <div className="text-center justify-center items-center space-y-6">
          {/* For Large Screens - BoxReveal Effects */}
          <div className="hidden lg:block space-y-6">
            
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-heading font-bold mt-16 
                             bg-gradient-to-r from-orange-600 via-button to-orange-600 
                             text-transparent bg-clip-text 
                             bg-[length:200%_200%] animate-glimmer text-center">
                DAZZLE
              </h1>
         

           
              <h2 className="md:px-36 text-4xl md:text-5xl font-bold font-subheading text-center">
                Transforming Research into Actionable Intelligence
              </h2>
          

           
              <p className="text-gray-600 md:text-lg font-content">
                India’s leading hub for data-driven insights, revolutionizing analytics with precision, innovation, and expertise.
              </p>
          
           
              

              <div className="justify-center items-center gap-6">
              <Button className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                                 hover:from-button hover:to-button transition-all duration-300 
                                 text-white px-6 py-4 rounded-full text-lg font-content 
                                 before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                                 before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                                 before:transition-all before:duration-500 hover:before:left-[125%] mr-2">
                Contact Sales
              </Button>
          <Button variant="outline" className="relative overflow-hidden transition-all duration-300 
                                 px-6 py-4 rounded-full text-lg font-content 
                                 before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                                 before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                                 before:transition-all before:duration-500 hover:before:left-[125%]">Learn More</Button>
        </div>
          
          </div>

          {/* For Mobile - Simple Display without Animations */}
          <div className="block lg:hidden space-y-4">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-12 
                           bg-gradient-to-r from-orange-600 via-button to-orange-600 
                           text-transparent bg-clip-text 
                           bg-[length:200%_200%] animate-glimmer">
              DAZZLE
            </h1>

            <h2 className="text-lg md:text-xl font-subheading">
              Transforming Research into Actionable Intelligence
            </h2>

            <p className="text-gray-600 md:text-lg font-content">
              India’s leading hub for data-driven insights, revolutionizing analytics with precision, innovation, and expertise.
            </p>

            <Button className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                               hover:from-button hover:to-button transition-all duration-300 
                               text-white px-6 py-4 rounded-full text-lg font-content 
                               before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                               before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                               before:transition-all before:duration-500 hover:before:left-[125%]">
              Connect with Us
            </Button>
          </div>
        </div>
        
      </motion.div>

      <HeroScrollWithVideo/>
      <div ref={unlockRef}></div>

      {/* Industry Expertise */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInSlideUp}
        viewport={{ once: false, amount: 0.5 }}
        className="h-full shadow-[0px_0px_0px_rgba(0,0,0,0.3)]"
      >
        <h2 className="pt-20 pb-28 md:px-36 font-bold font-subheading  z-10 relative lg:block hidden mx-24 text-4xl md:text-5xl text-center">
          Elevate Your <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Success</span> with Our <span className="bg-gradient-to-r from-button via-button to-button text-transparent bg-clip-text">Expertise</span>
        </h2>
        <section className="md:px-20 lg:px-20 px-4 relative lg:flex lg:justify-center lg:items-center">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <Image
              src="./globe-red.svg"
              alt="Background Image"
              layout="intrinsic"
              width={400}
              height={200}
              objectFit="contain"
              className="lg:mb-36 mt-10"
            />
          </div>

          {/* Mobile version of the heading */}
          <h2 className="text-3xl md:text-5xl font-bold font-subheading mb-40 z-10 relative lg:hidden text-center">
            Elevate Your <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Success</span> with Our <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Expertise</span>
          </h2>

          <div className="lg:flex lg:justify-center lg:items-center lg:mt-16 z-10 relative">
            <IndustrySlider />
          </div>
        </section>
      </motion.div>

      {/* Already Chosen By */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInSlideUp}
        viewport={{ once: false, amount: 0.5 }}
        className="md:px-24 lg:px-24 px-2 pt-10 md:pt-8"
      >
        <MarqueeDemo />
      </motion.div>

      {/* Case Studies */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInSlideUp}
        viewport={{ once: false, amount: 0.5 }}
        className="px-4 md:px-16 lg:px-24 md:pb-10 lg:pb-12 md:pt-10 lg:pt-12"
      >
        <CaseStudies />
      </motion.div>

      <div className="pt-20">
        {/* Field Quality Protocols */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }}
          ref={fieldProtocolRef}
        >
          <FieldProtocols />
        </motion.div>
      </div>
    </motion.div>
  );
}
