"use client";

import React, { useState, useEffect } from "react";

const MultiCardComponent = () => {
  const cardsData = [
    { 
      title: "Quantitative & Qualitative", 
      description: "Combining numerical analysis with subjective evaluations to gain a comprehensive understanding of data trends, behaviors, and underlying patterns.", 
      rotation: -60 
    },
    { 
      title: "Modeling & Forecasting", 
      description: "Leveraging statistical techniques, machine learning, and AI-driven models to predict future trends, optimize decision-making, and enhance strategic planning.", 
      rotation: -30 
    },
    { 
      title: "Desk Research", 
      description: "Conducting thorough investigations using published reports, market studies, academic research, and literature reviews to extract valuable insights and support informed decision-making.", 
      rotation: 0 
    },
    { 
      title: "Sector & Expert Consultation", 
      description: "Engaging with industry professionals, thought leaders, and domain experts to gain deep insights, validate findings, and ensure practical applicability of research outcomes.", 
      rotation: 30 
    },
    { 
      title: "Knowledge Technology", 
      description: "Integrating artificial intelligence, machine learning, and automated systems to enhance knowledge management, streamline information retrieval, and improve decision-support systems.", 
      rotation: 55 
    },
    { 
      title: "Data Analytics", 
      description: "Utilizing advanced data processing techniques, visualization tools, and analytical frameworks to uncover meaningful patterns, trends, and actionable insights from raw data.", 
      rotation: 60 
    }
  ];
  

  return (
      <div className="flex flex-wrap justify-center max-w-screen-lg mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative w-60 h-72 bg-secondary-light backdrop-blur-md rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ transform: `rotate(${card.rotation}deg)` }}
          >
            <h3 className="text-xl font-semibold text-button font-subheading">{card.title}</h3>
            <p className="mt-3 text-sm font-content">{card.description}</p>
          </div>
        ))}
      </div>
    
    
  );
};

export default MultiCardComponent;