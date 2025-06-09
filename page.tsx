"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IndustrySlider } from "./components/industry-slider";
import { MarqueeDemo } from "./components/MarqueeComp";
import CaseStudies from "./components/CaseStudyComp";
import FieldProtocols from "./components/ProtocolComp";
import HeaderComp from "./components/HeaderComp";
import { ProfessionalFluidEffect } from "./components/ui/red-splash-cursor";
import { HeroScrollWithVideo } from "./components/HeroScroll";
import Head from 'next/head';

export default function Home() {
  const [colorIntensity] = useState(0.5);
  const [opacity] = useState(0.7);
  const [pointerEvents] = useState(true);
  const unlockRef = useRef(null);
  const fieldProtocolRef = useRef(null);

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
    <>
      <Head>
        <title>Dazzle - Leading Data Analytics & Business Intelligence Solutions</title>
        <meta name="description" content="Dazzle is India's premier data analytics company offering cutting-edge business intelligence solutions. Transform your data into actionable insights with our expert services." />
        <meta name="keywords" content="data analytics, business intelligence, data insights, analytics consulting, India, data visualization, predictive analytics" />
        <meta property="og:title" content="Dazzle - Leading Data Analytics Solutions" />
        <meta property="og:description" content="Transform your business with data-driven insights and analytics solutions from India's leading analytics company." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dazzle.com" />
      </Head>

      <motion.div className="min-h-screen bg-white">
        <HeaderComp />

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
          className="py-12 md:py-24 lg:min-h-[80vh] flex flex-col justify-center items-center"
        >
          <div className="text-center justify-center items-center space-y-6">
            {/* For Large Screens - BoxReveal Effects */}
            <div className="hidden lg:block space-y-3">
              <h1 className="text-6xl md:text-9xl lg:text-9xl font-heading font-bold mt-16 
                           bg-gradient-to-r from-orange-600 via-button to-orange-600 
                           text-transparent bg-clip-text 
                           bg-[length:200%_200%] animate-glimmer text-center" style={{ zIndex: 1000 }}>
                DAZZLE
              </h1>

              <h2 className="md:px-36 text-4xl md:text-5xl font-bold font-subheading text-center" style={{ zIndex: 1000 }}>
                Data in Action, Strategy in Motion
              </h2>

              <p className="text-gray-600 md:text-lg font-content" style={{ zIndex: 1000 }}>
                India's leading hub for data-driven insights, revolutionizing analytics with precision, innovation, and expertise.
              </p>

              <div className="justify-center items-center gap-6" style={{marginTop: "30px", zIndex: 1000}}>
                <Button 
                  onClick={() => {
                    const heroVideo = document.querySelector('[id="hero-video-section"]');
                    if (heroVideo) {
                      const offset = heroVideo.getBoundingClientRect().height / 10;
                      window.scrollTo({
                        top: heroVideo.offsetTop + offset,
                        behavior: 'smooth'
                      });
                    }
                  }} 
                  className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                           hover:from-button hover:to-button transition-all duration-300 
                           text-white px-8 py-5 rounded-full text-lg font-content 
                           before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                           before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                           before:transition-all before:duration-500 hover:before:left-[125%] mr-2"
                  style={{ zIndex: 1000 }}>
                  Learn More
                </Button>
              </div>
            </div>

            {/* For Mobile - Simple Display without Animations */}
            <div className="block lg:hidden space-y-4 p-8">
              <h1 className="text-7xl md:text-6xl font-heading font-extrabold mt-12 
                         bg-gradient-to-r from-orange-600 via-button to-orange-600 
                         text-transparent bg-clip-text 
                         bg-[length:200%_200%] animate-glimmer">
                DAZZLE
              </h1>

              <h2 className="text-lg md:text-xl font-subheading font-bold">
                Data in Action, Strategy in Motion
              </h2>

              <p className="text-gray-600 md:text-lg font-content">
                India's leading hub for data-driven insights, revolutionizing analytics with precision, innovation, and expertise.
              </p>

              <div className="flex flex-col space-y-3">
                <Button className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                                hover:from-button hover:to-button transition-all duration-300 
                                text-white px-6 py-4 rounded-full text-lg font-content">
                  Contact Sales
                </Button>
                <Button variant="outline" className="relative overflow-hidden transition-all duration-300 
                                  px-6 py-4 rounded-full text-lg font-content">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div id="hero-video-section">
          <HeroScrollWithVideo/>
        </div>

        {/* Industry Expertise */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }}
          className="h-full"
        >
          <h2 className="pt-20 pb-28 md:px-36 font-bold font-subheading z-10 relative lg:block hidden mx-24 text-4xl md:text-5xl text-center">
            Your <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Vision</span>, 
            Our <span className="bg-gradient-to-r from-button via-button to-button text-transparent bg-clip-text">Strategy</span> 
            – Excellence in Action
          </h2>

          <section className="md:px-20 lg:px-20 px-4 relative lg:flex lg:justify-center lg:items-center">
            <div className="absolute inset-0 z-0 flex justify-center items-center">
              <Image
                src="./globe-red.svg"
                alt="Global presence visualization"
                width={400}
                height={200}
                className="lg:mb-36 mt-10"
                priority
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-subheading mb-40 z-10 relative lg:hidden text-center">
              Your <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Vision</span>, 
              Our <span className="bg-gradient-to-r from-button via-button to-button text-transparent bg-clip-text">Strategy</span> 
              – Excellence in Action
            </h2>

            <div className="lg:flex lg:justify-center lg:items-center lg:mt-16 z-10 relative">
              <IndustrySlider />
            </div>
          </section>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }}
          className="md:px-24 lg:px-24 px-2 pt-10 md:pt-8"
          ref={unlockRef}
        >
          <MarqueeDemo />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInSlideUp}
          viewport={{ once: false, amount: 0.5 }}
          className="px-4 md:px-16 lg:px-24 md:pb-10 lg:pb-12 md:pt-10 lg:pt-12"
        >
          <CaseStudies refer={fieldProtocolRef}/>
        </motion.div>

        <div className="pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInSlideUp}
            viewport={{ once: false, amount: 0.5 }}
          >
            <FieldProtocols />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
