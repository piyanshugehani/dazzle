"use client";

import React, { useState, useRef } from "react";

const Slide = () => {
  const cardsData = [
    { 
      title: "Quantitative & Qualitative Research", 
      description: "Combining numerical analysis with subjective evaluations to gain a comprehensive understanding of data trends, behaviors, and underlying patterns.", 
      rotation: -30 
    },
    { 
      title: "Desk Research & Data Analytics", 
      description: "Utilizing advanced data processing techniques, visualization tools, and analytical frameworks to uncover meaningful patterns, trends, and actionable insights from raw data.", 
      rotation: -10 
    },
    { 
      title: "Sector & Market Expert Consultations", 
      description: "Engaging with industry professionals, thought leaders, and domain experts to gain deep insights, validate findings, and ensure practical applicability of research outcomes.", 
      rotation: 10 
    },
    { 
      title: "Knowledge Technology & Forecasting Models", 
      description: "Integrating AI-driven models, machine learning, and automated systems to enhance knowledge management and improve decision-support systems.", 
      rotation: 30 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const swipeThreshold = 50; // Minimum distance (in px) required to consider it a swipe

    if (deltaX < -swipeThreshold && currentIndex < cardsData.length - 1) {
      // Swiped left → Show next card
      setCurrentIndex(currentIndex + 1);
    } else if (deltaX > swipeThreshold && currentIndex > 0) {
      // Swiped right → Show previous card
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Desktop View (Rotated Cards) */}
      <div className="hidden md:flex flex-wrap justify-center gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative w-60 h-72 bg-secondary-light backdrop-blur-md rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:z-50"
            style={{ transform: `rotate(${card.rotation}deg)` }}
          >
            <h3 className="text-xl font-semibold text-button font-subheading">
              {card.title}
            </h3>
            <p className="mt-3 text-sm font-content">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile View (One Card, Swipe to Change) */}
      <div className="md:hidden flex flex-col items-center">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-64 h-72 bg-secondary-light backdrop-blur-md rounded-2xl p-6 shadow-lg touch-none select-none"
        >
          <h3 className="text-xl font-semibold text-button font-subheading">
            {cardsData[currentIndex].title}
          </h3>
          <p className="mt-3 text-sm font-content">
            {cardsData[currentIndex].description}
          </p>
        </div>

        {/* Index Indicator */}
        <div className="mt-4 flex gap-2">
          {cardsData.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                currentIndex === idx ? "bg-button" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
