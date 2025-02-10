"use client"
import React from "react";
import { motion } from "framer-motion";
import "./scrollbar.css";

const MultiCardComponent = () => {
  const cardsData = [
    { title: "Quantitative & Qualitative", description: "Combining numerical analysis with subjective evaluations to gain a comprehensive understanding of data trends, behaviors, and underlying patterns.", rotation: -50 },
    { title: "Modeling & Forecasting", description: "Leveraging statistical techniques, machine learning, and AI-driven models to predict future trends, optimize decision-making, and enhance strategic planning.", rotation: -30 },
    { title: "Desk Research", description: "Conducting thorough investigations using published reports, market studies, academic research, and literature reviews to extract valuable insights and support informed decision-making.", rotation: -5 },
    { title: "Sector & Expert Consultation", description: "Engaging with industry professionals, thought leaders, and domain experts to gain deep insights, validate findings, and ensure practical applicability of research outcomes.", rotation: 15 },
    { title: "Knowledge Technology", description: "Integrating artificial intelligence, machine learning, and automated systems to enhance knowledge management, streamline information retrieval, and improve decision-support systems.", rotation: 35 },
    { title: "Data Analytics", description: "Utilizing advanced data processing techniques, visualization tools, and analytical frameworks to uncover meaningful patterns, trends, and actionable insights from raw data.", rotation: 50 }
  ];

  return (
    <>
      {/* Desktop View: Cards Split Outward */}
      <div className="hidden md:flex flex-wrap justify-center items-center relative h-[300px] max-w-screen mx-auto">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotate: 5, x: 0, y: 20, scale: 0.8 }} // Start from center
            animate={{ opacity: 1, rotate: card.rotation, x: (index - 2.5) * 200, y: 0, scale: 1 }} // Spread outward
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }} // Staggered effect
            whileHover={{
              scale: 1.05,  // Zoom-in effect
              zIndex: 10,  // Bring to front
              transition: { duration: 0.3 }, // Smooth transition
            }}
            className="absolute cursor-grab "
          >
            <div className="w-56 h-80 bg-secondary-light backdrop-blur-md rounded-2xl p-6 shadow-lg transform transition-all duration-300">
              <h3 className="text-xl font-semibold text-button font-subheading">{card.title}</h3>
              <p className="mt-3 text-sm font-content">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View: Simple Scrollable List */}
      <div className="flex md:hidden overflow-x-scroll space-x-4 px-4 py-4 scrollbar-hide">
        {cardsData.map((card, index) => (
          <div key={index} className="relative z-0 cursor-grab hover:z-50 hover:scale-105 transition-all duration-300 shrink-0">
            <div className="w-64 h-80 bg-secondary-light backdrop-blur-md rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-button font-subheading">{card.title}</h3>
              <p className="mt-3 text-md font-content">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiCardComponent;
