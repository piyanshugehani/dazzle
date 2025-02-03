import Image from "next/image"
import { Button } from "@/components/ui/button"
import { IndustrySlider } from "./components/industry-slider"
import { MarqueeDemo } from "./components/MarqueeComp"
import CaseStudies from "./components/CaseStudyComp"
import FieldProtocols from "./components/ProtocolComp"
import FooterDazzle from "./components/FooterDazzle"
import HeaderComp from "./components/HeaderComp"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary">
      {/* Header */}
      <HeaderComp />

      {/* Hero Section */}
      <section className="mt-12 px-4 md:px-16 lg:px-24 py-12 md:py-24 lg:min-h-[80vh] lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-button font-heading font-bold text-6xl md:text-5xl lg:text-6xl mt-16">
            DAZZLE
          </h1>
          <h2 className="text-xl md:text-xl lg:text-2xl font-subheading">
            Transforming Research into Actionable Intelligence
          </h2>
          <p className="text-gray-600 md:text-lg font-content">
            India’s leading hub for data-driven insights, revolutionizing analytics with precision, innovation, and expertise.
          </p>
          <Button className="bg-button hover:bg-[#8B6508] text-white px-8 py-6 rounded-full text-lg font-content">
            Connect with Us
          </Button>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={'./dummy.png'}
              alt="Modern office workspace"
              width={800}
              height={600}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>


      {/* Industry Expertise */}
      <div className="bg-secondary pb-12 pt-8 shadow-[0px_0px_0px_rgba(0,0,0,0.3)] rounded-md">
        {/* Web version of the heading */}
        <h2 className="font-heading font-bold z-10 relative lg:block hidden mx-24 text-4xl md:text-5xl text-button text-center mb-36 lg:mb-36">
          Unlock Your Potential with Dazzle
        </h2>


        <section className="md:px-20 lg:px-20 px-4 relative lg:flex lg:justify-center lg:items-center">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <Image
              src="./globe.svg" // Path to your image in the public folder
              alt="Background Image"
              layout="intrinsic"
              width={400}  // Specify width
              height={200} // Specify height
              objectFit="contain"
              className="lg:mb-36"
            />

          </div>

          {/* Mobile version of the heading */}
          <h2 className="text-3xl md:text-3xl font-heading text-button mb-40 z-10 relative lg:hidden text-center">
            Unlock Your Potential with Dazzle
          </h2>

          <div className="lg:flex lg:justify-center lg:items-center lg:mt-16 z-10 relative">
            <IndustrySlider />
          </div>
        </section>
      </div>


      {/* Already Chosen By */}
      <section className="md:px-24 lg:px-24 px-4 py-8 md:py-12 bg-secondary">
        <MarqueeDemo />
      </section>

      {/* Case Studies */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:pt-0 md:pb-20 bg-secondary">
        <CaseStudies />
      </section>

      {/* Field Quality Protocols */}
      <FieldProtocols />

      {/* Footer */}
      <FooterDazzle />

    </div>
  )
}

