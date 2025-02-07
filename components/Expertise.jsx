import React from 'react';

const ExpertiseOverview = () => {
  const competencies = [
    'Primary data collection',
    'Data Analytics',
    'Intellectual Property & Legal Process Services',
    'Knowledge Technology'
  ];

  const industryExpertise = [
    'Financial Services & Banking',
    'Consumer Goods & Retail',
    'Telecom, IT, Electronics',
    'Automotives, Transportation & Logistics',
    'Pharmaceuticals & Life Sciences'
  ];

  const coverage = [
    'Operation centers in Mumbai, Delhi, Bangalore and Chennai',
    'Multi-lingual capabilities (50+)',
    'Local market knowledge and resources, on-site teams and research capabilities in surrounding regions',
    'Field offices and field executives in over 21 locations',
    'Around the clock project execution (24h x 5)'
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white bg-blue-800 p-4 rounded-t-lg">
        Areas of Expertise
      </h1>
      
      <p className="text-lg mb-8">
        Dazzle provides customized research services to leading-edge companies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Left Column - Competencies */}
        <div className="bg-gray-100 p-4 rounded border-2 border-blue-800">
          <h2 className="text-xl font-bold bg-blue-800 text-white p-2 -mt-4 -mx-4 mb-4">
            Competencies
          </h2>
          <ul className="list-none space-y-2">
            {competencies.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-800 font-bold">■</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column - Globe Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64">
            <img
              src="/api/placeholder/256/256"
              alt="Global Network"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Column - Industry Expertise */}
        <div className="bg-gray-100 p-4 rounded border-2 border-blue-800">
          <h2 className="text-xl font-bold bg-blue-800 text-white p-2 -mt-4 -mx-4 mb-4">
            Industry Expertise
          </h2>
          <ul className="list-none space-y-2">
            {industryExpertise.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-800 font-bold">■</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section - Coverage & Market Knowledge */}
      <div className="bg-gray-100 p-4 rounded border-2 border-blue-800 mt-6">
        <h2 className="text-xl font-bold bg-blue-800 text-white p-2 -mt-4 -mx-4 mb-4">
          Coverage & Market Knowledge
        </h2>
        <ul className="list-none space-y-2">
          {coverage.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-blue-800 font-bold">■</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpertiseOverview;