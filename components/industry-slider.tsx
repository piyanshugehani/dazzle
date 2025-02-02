import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { IndustryCard } from "./IndustryCard"

const industryData = [
  {
    title: "Industry Expertise",
    items: [
      "Financial Services & Banking",
      "Consumer Goods & Retail",
      "Telecom, IT, Electronics",
      "Automotives, Transportation & Logistics",
      "Pharmaceuticals & Life Sciences",
    ],
  },
  {
    title: "Competencies",
    items: [
      "Primary data collection",
      "Data Analytics",
      "Intellectual Property & Legal",
      "Process Services",
      "Knowledge Technology",
    ],
  },
  {
    title: "Coverage & Market",
    items: [
      "Operation centers in Mumbai, Delhi, Bangalore and Chennai",
      "Multi-lingual capabilities (50+)",
      "Field offices in over 21 locations",
      "24x5 Around-the-Clock Project Execution",
    ],
  },
  {
    title: "Industry Solutions",
    items: [
      "Custom Research Solutions",
      "Market Intelligence",
      "Business Analytics",
      "Digital Transformation",
      "Strategic Consulting",
    ],
  },
]

export function IndustrySlider() {
  return (
    <div>
      {/* Desktop Grid - Hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {industryData.map((industry, index) => (
          <div key={index}>
            <IndustryCard {...industry} />
          </div>
        ))}
      </div>

      {/* Mobile Carousel - Hidden on desktop */}
      <div className="md:hidden">
        <Carousel className="overflow-visible">
          <CarouselContent>
            {industryData.map((industry, index) => (
              <CarouselItem key={index} className="max-w-[85%] shrink-0 snap-center">
                <div className="p-2">
                  <IndustryCard {...industry} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
         
        </Carousel>
      </div>
    </div>
  )
}
