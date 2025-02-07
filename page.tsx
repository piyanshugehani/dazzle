"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IndustrySlider } from "./components/industry-slider";
import { MarqueeDemo } from "./components/MarqueeComp";
import CaseStudies from "./components/CaseStudyComp";
import FieldProtocols from "./components/ProtocolComp";
import FooterDazzle from "./components/FooterDazzle";
import HeaderComp from "./components/HeaderComp";
import { BoxReveal } from "./components/DecryptedText";

export default function Home() {
  const unlockRef = useRef(null);
  const fieldProtocolRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: unlockRef,
    offset: ["start center", "start center"],
  });

  // Interpolating background color transition
  const bgMotionValue = useTransform(scrollYProgress, [0, 1], ["#F8EDED", "#F3D2C3"]);

  // State to store extracted color string
  const [bgColor, setBgColor] = useState("#F8EDED");


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
          setBgColor("#F8EDED"); // Reset to first color
        }
      },
      { threshold: 0.1 } // Trigger when 50% is visible
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

  // Animation variant for fade-in slide-up
  const fadeInSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variant for fade-in slide-up
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
      <HeaderComp bgColor = {bgColor} />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: false, amount: 0.5 }} // Triggers when the element is 50% visible (centered)
        className="px-4 md:px-16 lg:px-24 py-12 md:py-24 lg:min-h-[80vh] lg:flex lg:items-center lg:gap-12"
      >
        <div className="lg:w-1/2">
  {/* For Large Screens - BoxReveal Effects */}
  <div className="hidden lg:block space-y-6">
    <BoxReveal boxColor={"#6A0E1D"} duration={0.2}>
      <h1 className="text-6xl md:text-7xl lg:text-9xl font-heading font-bold mt-16 
                     bg-gradient-to-r from-orange-600 via-button to-orange-600 
                     text-transparent bg-clip-text 
                     bg-[length:200%_200%] animate-glimmer">
        DAZZLE
      </h1>
    </BoxReveal>

    <BoxReveal boxColor={"#6A0E1D"} duration={0.4}>
      <h2 className="text-xl md:text-xl lg:text-2xl font-subheading">
        Transforming Research into Actionable Intelligence
      </h2>
    </BoxReveal>

    <BoxReveal boxColor={"#6A0E1D"} duration={0.4}>
      <p className="text-gray-600 md:text-lg font-content">
        India’s leading hub for data-driven insights, revolutionizing analytics with precision, innovation, and expertise.
      </p>
    </BoxReveal>

    <BoxReveal boxColor={"#B43F3F"} duration={0.5}>
      <Button className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                         hover:from-button hover:to-button transition-all duration-300 
                         text-white px-8 py-6 rounded-full text-lg font-content 
                         before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                         before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                         before:transition-all before:duration-500 hover:before:left-[125%]">
        Connect with Us
      </Button>
    </BoxReveal>
  </div>

  {/* For Mobile - Simple Display without Animations */}
  <div className="block lg:hidden text-center space-y-4">
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

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={'./dummy.png'}
              alt="Modern office workspace"
              width={800}
              height={600}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div>
        {/* Industry Expertise */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is visible (centered)
          className="h-full shadow-[0px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <h2 className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text pt-20 pb-28 font-heading font-bold z-10 relative lg:block italic hidden mx-24 text-4xl md:text-5xl text-center">
          Elevate Your Success with Our Expertise 
          </h2>
          <section className="md:px-20 lg:px-20 px-4 relative lg:flex lg:justify-center lg:items-center">
            <div className="absolute inset-0 z-0 flex justify-center items-center">
              <Image
                src="./globe.svg"
                alt="Background Image"
                layout="intrinsic"
                width={400}
                height={200}
                objectFit="contain"
                className="lg:mb-36 mt-10"
              />
            </div>

            {/* Mobile version of the heading */}
            <h2 className="text-3xl md:text-3xl font-heading font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text mb-40 z-10 relative lg:hidden text-center">
            Elevate Your Success with Our Expertise
            </h2>

            <div className="lg:flex lg:justify-center lg:items-center lg:mt-16 z-10 relative" ref={unlockRef}>
              <IndustrySlider />
            </div>
          </section>
        </motion.div>

        {/* Already Chosen By */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is visible (centered)
          className="md:px-24 lg:px-24 px-2 pt-10 md:pt-8"
        >
          <MarqueeDemo />
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is visible (centered)
          className="px-4 md:px-16 lg:px-24 md:pb-10 lg:pb-12 md:pt-0"
        >
          <CaseStudies />
        </motion.div>
      </div>

      <div className="bg-secondary pt-20 " ref={fieldProtocolRef}>
        {/* Field Quality Protocols */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is visible (centered)
        >
          <FieldProtocols />
        </motion.div>
      </div>
    </motion.div>
  );
}
