"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import complex from "./../public/rest/complex.jpeg";
import drive from "./../public/rest/drive.webp";
import future from "./../public/rest/future.jpeg";
import optimize from "./../public/rest/optimize.webp";

const BenefitsWheel = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const benefits = [
    {
      title: "Drive Revenue Growth",
      description:
        "Target ideal customers with precision, increasing conversion rates and lifetime value through data-driven acquisition strategies.",
      image:
        drive,
    },
    {
      title: "Optimize Engagement",
      description:
        "Create seamless experiences across all touchpoints that resonate with your audience and drive meaningful interactions.",
      image:
        optimize,
    },
    {
      title: "Future-proof Your Brand",
      description:
        "Stay ahead of market shifts with predictive insights that enable nimble adaptation to emerging trends and consumer behaviors.",
      image:
        future,
    },
    {
      title: "Transform Complex Data",
      description:
        "Convert overwhelming information into clear, actionable competitive advantages that drive strategic decision-making.",
      image:
        complex,
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    // Auto-rotate through benefits every 4 seconds
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <motion.div
      ref={ref}
      className="mb-24 max-w-5xl mx-auto px-4"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.8, staggerChildren: 0.2 },
        },
      }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-subheading mt-2 mb-16 text-center font-bold"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        What{" "}
        <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">
          this
        </span>{" "}
        means to you
      </motion.h2>

      <div className="relative">
        {/* Main content container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Dial component */}
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          >
            <div className="aspect-square relative max-w-md mx-auto">
            

              {/* Inner image container (circle) */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBenefit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={benefits[activeBenefit].image}
                      alt={`Image ${activeBenefit + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Content display */}
          <motion.div
            className="w-full md:w-1/2 bg-gradient-to-br from-white to-red-50 p-8 md:p-10 rounded-3xl shadow-lg"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="relative h-48 overflow-hidden">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeBenefit === index ? 1 : 0,
                    y: activeBenefit === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-subheading font-bold text-button mb-4">
                    {benefit.title}
                  </h3>
                  <p className="font-content text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-16 w-32 h-32 rounded-full bg-red-50 opacity-30 blur-xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-24 h-24 rounded-full bg-orange-50 opacity-30 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default BenefitsWheel;
