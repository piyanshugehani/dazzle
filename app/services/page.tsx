import React from 'react';
import MultiCardComponent from './../../components/MultiCardComponent';
import ExpertiseOverview from './../../components/Expertise';
import FAQSection from './../../components/faq';
import AnimatedSection from './../../components/AnimatedSection'; // Import client component

function Page() {
  return (
    <div className="p-10 bg-secondary">
      

     

      <AnimatedSection className="my-12 bg-secondary">
      <h2 className="text-4xl md:text-5xl font-heading mt-2 mb-24 text-center italic font-bold">Our <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text ">range</span> of offerings based on <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text">data collection</span></h2>

        <MultiCardComponent />
      </AnimatedSection>

      <AnimatedSection className="py-20">
      <h2 className="text-4xl md:text-5xl font-heading mt-2 mb-4 text-center italic font-bold">   <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text "></span>Areas of <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text">Expertise</span></h2>

        <ExpertiseOverview />
      </AnimatedSection>

      <AnimatedSection className="pb-8">
        <FAQSection />
      </AnimatedSection>
    </div>
  );
}

export default Page;
