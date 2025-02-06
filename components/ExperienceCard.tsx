"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

interface ResearchStudy {
  title: string
  description: string
}

const researchStudies: ResearchStudy[] = [
  {
    title: "Health and Sexual Behaviour Study",
    description: "Research study in Maharashtra involving in-depth interviews and structured questionnaires administered to 2,400 men and women across 5 occupational groups. Included focus group discussions.",
  },
  {
    title: "Educational Impact Study", 
    description: "Coordinated longitudinal impact study of educational programme for children on Television and experimental design to measure impact of communication for Sesame Street adaptation in India across 8 states.",
  },
  {
    title: "National Health and Education Study",
    description: "NHED study focused on women in Rural Maharashtra, examining health and education outcomes.",
  },
  {
    title: "Financial Impact Study",
    description: "Coordinated study on impact of education and possibilities of small loan facilities in villages at Warangal near Hyderabad.",
  },
  {
    title: "Sexual Health Research",
    description: "Research study on sexually transmitted diseases in Maharashtra, Karnataka and Mumbai for PSI through Mystery shopping and in-depth interviews.",
  },
]

export default function ResearchExperience() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full py-12 bg-secondary-light relative rounded-lg">
      <div className="container px-4 md:px-6">
      

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {researchStudies.map((study, index) => {
              const isCenter = Math.floor(researchStudies.length / 2) === index
              const isLeft = index < Math.floor(researchStudies.length / 2)
              
              return (
                <Card
                  key={index}
                  className={`
                    group/card relative bg-gray-100 
                    transition-all duration-300 overflow-hidden min-w-[300px] max-w-[300px]
                    snap-center flex-shrink-0 md:hover:scale-105 lg:md:hover:scale-105
                    ${isHovered ? 'translate-y-0 rotate-0' : 
                      isCenter ? 'translate-y-0 rotate-0' :
                      isLeft ? '-translate-y-6 -rotate-6' : '-translate-y-6 rotate-6'}
                  `}
                  style={{
                    transformOrigin: isLeft ? 'right center' : 'left center',
                  }}
                >
                
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-pink-400 mb-4" />
                    <h3 className="text-lg font-semibold font-subheading text-button">{study.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-content">{study.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Button
  variant="ghost"
  size="icon"
  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 
             bg-black/60 hover:bg-black/80 text-white rounded-full 
             opacity-0 group-hover:opacity-100 transition-opacity 
             hidden sm:flex"
  onClick={() => scroll("left")}
>
  <ChevronLeft className="h-6 w-6" />
</Button>

<Button
  variant="ghost"
  size="icon"
  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 
             bg-black/60 hover:bg-black/80 text-white rounded-full 
             opacity-0 group-hover:opacity-100 transition-opacity 
             hidden sm:flex"
  onClick={() => scroll("right")}
>
  <ChevronRight className="h-6 w-6" />
</Button>

        </div>
      </div>
    </section>
  )
}