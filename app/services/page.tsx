import React from 'react';
import MultiCardComponent from './../../components/MultiCardComponent';
import ExpertiseOverview from './../../components/Expertise';
import FAQSection from './../../components/faq';
import AnimatedSection from './../../components/AnimatedSection'; // Import client component

function Page() {
  return (
    <div className="p-10 bg-secondary">
      

      <AnimatedSection className="py-20">
        <h1 className="text-3xl md:text-4xl font-heading pb-6 text-center font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">
          Areas of expertise
        </h1>
        <ExpertiseOverview />
      </AnimatedSection>

      <AnimatedSection className="my-12 bg-secondary">
        <h1 className="text-3xl md:text-4xl font-heading md:pb-20 lg:pb-20 pb-10 text-center font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">
          Our range of offerings based on data collection
        </h1>
        <MultiCardComponent />
      </AnimatedSection>

      <AnimatedSection className="pb-8">
        <FAQSection />
      </AnimatedSection>
    </div>
  );
}

export default Page;
