import { Globe, Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { IndustrySlider } from "./components/industry-slider"
import { MarqueeDemo } from "./components/MarqueeComp"
import CaseStudies from "./components/CaseStudyComp"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6EC] to-[#E6D0B3]">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 lg:px-16">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6" />
          <span className="font-semibold">DAZZLE</span>
        </div>
        <button className="p-2 lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="hover:text-[#B8860B]">
            Services
          </a>
          <a href="#" className="hover:text-[#B8860B]">
            About
          </a>
          <a href="#" className="hover:text-[#B8860B]">
            Contact
          </a>
          <Button className="bg-[#B8860B] hover:bg-[#8B6508]">Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:py-24 lg:min-h-[80vh] lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-[#B8860B] font-serif text-3xl md:text-4xl lg:text-5xl">Research Consultancy</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Best Data Collection & Analytics in India</h2>
          <p className="text-gray-600 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Button className="bg-[#B8860B] hover:bg-[#8B6508] text-white px-8 py-6 rounded-full text-lg">
            Connect with us
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
      <div className="bg-[#FDF6EC] py-12">
      {/* Web version of the heading */}
      <h2 className="text-3xl md:text-3xl font-serif text-[#B8860B] mb-36 z-10 relative lg:block hidden mx-24">
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
        <h2 className="text-2xl md:text-2xl font-serif text-[#B8860B] mb-40 z-10 relative lg:hidden text-center">
        Unlock Your Potential with Dazzle
        </h2>

        <div className="lg:flex lg:justify-center lg:items-center lg:mt-16 z-10 relative">
          <IndustrySlider />
        </div>
      </section>
      </div>


      {/* Already Chosen By */}
      <section className="md:px-16 lg:px-5 py-12 md:py-24 bg-[#FDF6EC]">
       <MarqueeDemo/>
      </section>

      {/* Case Studies */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:pt-0 md:pb-20 bg-[#FDF6EC]">
        <CaseStudies/>
      </section>

      {/* Field Quality Protocols */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-4">Field Quality Protocols</h2>
          <p className="text-gray-600 mb-8">Rigorously implemented and executed in all stages of field operations</p>
          <div className="space-y-4">
            {["Set up Stage", "Fieldwork Stage", "Reporting to Client"].map((stage) => (
              <Collapsible key={stage} className="w-full">
                <CollapsibleTrigger className="w-full bg-[#F3E6D0] hover:bg-[#E6D0B3] rounded-xl px-6 py-4 text-left font-medium transition-colors">
                  {stage}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6">
                  <p className="text-gray-600">Detailed information about {stage}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6 mb-8">
            {["YouTube", "Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <div
                key={social}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <Globe className="w-8 h-8" />
            <div className="font-semibold text-xl">DAZZLE</div>
            <div className="text-sm opacity-70">A Market Research Company</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

