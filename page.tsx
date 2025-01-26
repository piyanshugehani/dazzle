import { Globe, Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-27%20023312-xaqsyRc6pOX3SgwGJKXPM8nFchfETs.png"
              alt="Modern office workspace"
              width={800}
              height={600}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:py-24 relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-[#B8860B] rounded-full opacity-20 blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-8">Industry Expertise</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <ul className="space-y-3 text-gray-800">
              <li>• Financial Services & Banking</li>
              <li>• Consumer Goods & Retail</li>
              <li>• Telecom, IT, Electronics</li>
              <li>• Automotives</li>
              <li>• Transportation & Logistics</li>
              <li>• Pharmaceuticals & Life Sciences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Already Chosen By */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-12 text-center">Already Chosen By</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="aspect-[3/2] relative">
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-27%20023327-qgMjUBbPNY3ahEugVSIwWCfjnhFylC.png`}
                alt={`Client logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 md:px-16 lg:px-24 py-12 md:py-24 bg-[#FDF6EC]">
        <h2 className="text-2xl md:text-3xl font-serif text-[#B8860B] mb-12 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="font-bold mb-2">SAMSUNG</h3>
            <p className="text-sm text-gray-600">Advertising Tracking Research</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="font-bold mb-2">Seagram's</h3>
            <p className="text-sm text-gray-600">Fuel Vodka Packaging Research</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="font-bold mb-2">ITC Limited</h3>
            <p className="text-sm text-gray-600">Shop Census for Bingo</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="font-bold mb-2">SDL</h3>
            <p className="text-sm text-gray-600">Research for the TV Programme</p>
          </div>
        </div>
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

