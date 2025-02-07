import React from 'react'
import MultiCardComponent from './../../components/MultiCardComponent'
import ExpertiseOverview from './../../components/Expertise'
import FAQSection from './../../components/faq'
function page() {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }


  return (
    <div className="p-10 bg-secondary">
      <div className="my-12">
        <h1
          className="text-3xl md:text-4xl font-heading md:pb-20 lg:pb-20 pb-10 text-center font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text"
          {...fadeIn}
        >
          Our range of offerings based on data collection
        </h1>
        <MultiCardComponent />
      </div>
  
      <div className='py-20'>
        <h1
          className="text-3xl md:text-4xl font-heading pb-6 text-center font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text"
          {...fadeIn}
        >
          Areas of expertise
        </h1>
        <ExpertiseOverview />
      </div>

      <div className='pb-8'>
        <FAQSection />
      </div>
    </div>
  );
  
}

export default page