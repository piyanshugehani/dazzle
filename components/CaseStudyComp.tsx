"use client"

import { useState, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface CaseStudy {
  id: number
  image: string
  title: string
  description: string
  learnMoreLink: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
    title: "Fuel Vodka Packaging Research for Seagram's",
    description:
      "Dazzle Research Consultancy conducted an in-depth study for Seagram's to analyze consumer perceptions and preferences related to the packaging of Fuel Vodka. The goal was to gather insights that could help enhance brand appeal and market positioning.",
    learnMoreLink: "/case-studies/seagrams",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
    title: 'Audience Research for "Meethi Churi No.1"',
    description:
      'Dazzle Consultancy conducted a comprehensive study for SOL Productions to analyze audience engagement and reception of the TV program "Meethi Churi No.1", which aired on Imagine Channel. The goal was to evaluate viewer preferences and gauge the show\'s impact.',
    learnMoreLink: "/case-studies/sol-productions",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
    title: "Advertising Tracking Research for Samsung",
    description:
      "Dazzle Consultancy conducted an extensive advertising tracking research project for Samsung to measure the effectiveness, reach, and impact of their advertisements across key metropolitan and Tier 1 cities in India.",
    learnMoreLink: "/case-studies/samsung",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwQMRXepN2fdEF1rxHAURLFvgriCKj.png",
    title: "Shop Census for ITC Limited (Bingo)",
    description:
      "Dazzle Consultancy conducted a comprehensive shop census for ITC Limited to map the availability, distribution, and retailer presence of Bingo! products in Mumbai.",
    learnMoreLink: "/case-studies/itc-limited",
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slidePosition, setSlidePosition] = useState(0)
  
  const isFirstSlide = activeIndex === 0
  const isLastSlide = activeIndex === caseStudies.length - 1
  
  const changeSlide = useCallback((nextIndex) => {
    if (isAnimating || nextIndex === activeIndex) return
    
    setIsAnimating(true)
    
    // First move current slide out
    setSlidePosition(-100)
    
    // Then change index and reset position after transition
    setTimeout(() => {
      setActiveIndex(nextIndex)
      setSlidePosition(0)
      
      // Mark animation as complete after position reset
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 400)
  }, [isAnimating, activeIndex])

  const nextSlide = useCallback(() => {
    if (isLastSlide) return
    const nextIndex = activeIndex + 1
    changeSlide(nextIndex)
  }, [activeIndex, isLastSlide, changeSlide])

  const prevSlide = useCallback(() => {
    if (isFirstSlide) return
    const prevIndex = activeIndex - 1
    changeSlide(prevIndex)
  }, [activeIndex, isFirstSlide, changeSlide])

  const goToSlide = useCallback((index) => {
    if (index === activeIndex) return
    changeSlide(index)
  }, [activeIndex, changeSlide])

  // Current case study
  const currentCase = caseStudies[activeIndex]

  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-subheading mt-2 text-center font-bold">
          Explore Our <span className="bg-gradient-to-r from-orange-600 via-red-500 to-red-600 text-transparent bg-clip-text">
            Case Studies
          </span>
        </h2>
        <p className="text-lg text-gray-800 font-content text-center mt-4 mb-8">
          See how we have helped our clients achieve their goals.
        </p>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10">
            <button
              onClick={prevSlide}
              className={cn(
                "p-2 rounded-full bg-white shadow-md transition-all",
                isFirstSlide 
                  ? "text-gray-300 cursor-not-allowed" 
                  : "text-gray-600 hover:text-gray-900"
              )}
              aria-label="Previous case study"
              disabled={isFirstSlide || isAnimating}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10">
            <button
              onClick={nextSlide}
              className={cn(
                "p-2 rounded-full bg-white shadow-md transition-all",
                isLastSlide 
                  ? "text-gray-300 cursor-not-allowed" 
                  : "text-gray-600 hover:text-gray-900"
              )}
              aria-label="Next case study"
              disabled={isLastSlide || isAnimating}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Case Study Content */}
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden mx-4 md:mx-10">
            <div className="relative overflow-hidden">
              <div 
                className="transition-transform duration-400 ease-out"
                style={{ transform: `translateX(${slidePosition}%)` }}
              >
                <div className="grid md:grid-cols-3">
                  {/* Image Section */}
                  <div className="bg-gray-50 min-h-[200px] md:min-h-[350px]">
                    <img
                      src={currentCase.image || "/placeholder.svg"}
                      alt={currentCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-6 md:p-8 md:col-span-2 bg-white">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif tracking-tight">
                        {currentCase.title}
                      </h3>
                      <p className="text-gray-700 mb-6 text-base leading-relaxed">
                        {currentCase.description}
                      </p>
                      <Link 
                        href={currentCase.learnMoreLink}
                        className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors group"
                      >
                        Learn more about this case study
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-orange-500 w-12" 
                    : "bg-gray-300 w-8 hover:bg-gray-400",
                )}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}