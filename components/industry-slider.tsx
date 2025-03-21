import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { IndustryCard } from "./IndustryCard"

const industryData = [
  {
    title: "Client focus & Partnering",
    items: [
      "We emphasize a clear focus on our clients and their needs.",
      "Our planning, approach, and results align with client goals.",
      "Each engagement is treated as a mutually beneficial partnership.",
      "Dazzle's synergies enable comprehensive research solutions.",
    ],
  },
  {
    title: "Our people",
    items: [
      "Dazzle’s employees are among the best trained in the industry.",
      "Teams consist of industry professionals, engineers, and statisticians.",
      "Depending on needs, we include experts, scientists, and economists.",
    ],
  },
  {
    title: "High quality standards",
    items: [
      "We uphold impeccable quality standards in every research stage.",
      "Our approach ensures complete confidence in the final results.",
      "Efficiency enables us to complete projects much quicker.",
      "This allows clients to make faster and smarter decisions.",
    ],
  },
  {
    title: "Actionable insights",
    items: [
      "We recognize the value of our clients' investments in expertise.",
      "Our goal is to ensure these investments drive real success.",
      "Every engagement is designed to deliver actionable insights.",
      "We go beyond reports—our impact truly makes a difference.",
    ],
  },
];



export function IndustrySlider() {
  return (
    <div>
      {/* Desktop Grid - Hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 font-subheading">
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
                <div className="p-0 pb-2">
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
