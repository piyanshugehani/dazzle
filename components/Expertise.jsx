"use client";

import Image from 'next/image';
import React from 'react';

const ExpertiseOverview = () => {
  const competencies = [
    'Strategy & Market Consulting',
    'Market Research',
    'Primary data collection',
    'Data Analytics',
    'Intellectual Property & Legal Process Services',
    'Knowledge Technology',
  ];

  const industryExpertise = [
    'Financial Services & Banking',
    'Consumer Goods & Retail',
    'Telecom, IT, Electronics',
    'Media & Entertainment',
    'Automotives, Transportation & Logistics',
    'Pharmaceuticals & Life Sciences',
  ];

  const coverage = [
    'Operation centers in Mumbai, Delhi, Bangalore and Chennai',
    'Multi-lingual capabilities (50+)',
    'Local market knowledge and resources, on-site teams and research capabilities in surrounding regions',
    'Field offices and field executives in over 21 locations',
    'Around the clock project execution (24h x 5)',
  ];

  const Card = ({ title, items }) => (
    <div className="relative group rounded-xl border border-gray-200 shadow-lg bg-secondary-light/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
      {/* Card Header */}
      <div className="relative px-6 py-2 bg-secondary-light shadow-inner border-b border-gray-100">
        <h2 className="text-xl font-heading text-gray-900">{title}</h2>
        {/* Underline always visible */}
        <div className="absolute -bottom-[1px] left-0 w-full h-[3px] bg-gradient-to-r from-orange-600 via-button to-button" />
      </div>

      {/* Card Body */}
      <div className="px-4 py-3">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* Custom Icon */}
              <span className="text-button mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              </span>
              <span className="text-gray-700 font-content leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <p className="text-md mb-8 text-center font-subheading">
        We provide industry sector-wise consultancy services to our clients. 
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card title="Competencies" items={competencies} />

        <div className="flex items-center justify-center">
          
            <Image
              src="https://cdn.prod.website-files.com/627c8700df0be67c4b1d533c/6660d678bbfad0e37b353a39_Area%20of%20Expertise.jpg"
              alt="India Map"
              width={600}
              height={600}
              className="rounded-full object-cover"
            />
          
        </div>

        <Card title="Industry Expertise" items={industryExpertise} />
      </div>

      <div className="mt-8">
        <Card title="Coverage & Market Knowledge" items={coverage} />
      </div>
    </div>
  );
};

export default ExpertiseOverview;
