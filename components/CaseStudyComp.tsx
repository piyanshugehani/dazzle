"use client"

import { useState, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import CaseStudyModal from "./case-study-modal";
import seagram from "@/public/cs/seagram.png"
import itc from "@/public/cs/itc.png"
import sol from "@/public/cs/sol.jpg"
import samsung from "@/public/cs/samsung.jpeg"
import pred from "@/public/cs/predd.png"

// Simplified CaseStudy type for the carousel display
interface CarouselCaseStudy {
  id: number
  image: string
  title: string
  description: string
  learnMoreLink: string
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    image: seagram.src,
    title: "Fuel Vodka Packaging Research for Seagram's",
    summary:
      "Dazzle Consultancy conducted an in-depth study for Seagram's to analyze consumer perceptions and preferences related to the packaging of Fuel Vodka. The goal was to gather insights that could help enhance brand appeal and market positioning.",
    learnMoreLink: "/case-studies/seagrams",
    details: {
      objective:
        "Our Consultants conducted an in-depth study for Seagram's to analyze consumer perceptions and preferences related to the packaging of Fuel Vodka. The goal was to gather insights that could help enhance brand appeal and market positioning.",
      researchApproach: {
        locationsCovered: ["Mumbai", "Kolkata"],
        sampleSize: "4 Focus Group Discussions (FGDs) and 600 Face-to-Face Interviews (300 per city)",
        timeline: "12 weeks",
      },
      demographic: "Individuals aged 21-35 years",
      respondents: ["Decision-makers, including Chief Wage Earners (CWE) and working adults"],
      sec: "A & B segments",
      keyInsights: [
        "Packaging appeal – How design elements influence purchasing decisions",
        "Brand perception – Consumer sentiments towards Fuel Vodka's branding",
        "Market preferences – Factors driving purchase intent in metro markets",
        "Competitive landscape – Positioning Fuel Vodka against competitors",
      ],
      impactSummary:
        "Through this research, Seagram's was able to make data-driven decisions to refine its packaging strategy and better connect with its target audience.",
      whyDazzle:
        "With expertise in market research and consumer insights, Dazzle Consultancy delivers actionable intelligence that helps brands like Seagram's enhance their market positioning and product appeal.",
    },
  },
  {
    id: 2,
    image: sol.src,
    title: 'Audience Research for "Meethi Churi No.1" (SOL Productions)',
    summary:
      'Dazzle Consultancy conducted a comprehensive study for SOL Productions to analyze audience engagement and reception of the TV program "Meethi Churi No.1", which aired on Imagine Channel. The goal was to evaluate viewer preferences and gauge the show\'s impact.',
    learnMoreLink: "/case-studies/sol-productions",
    details: {
      objective:
        'Our Consultants conducted a comprehensive study for SOL Productions to analyze audience engagement and reception of the TV program "Meethi Churi No.1", which aired on Imagine Channel. The goal was to evaluate viewer preferences and gauge the show\'s impact.',
      researchApproach: {
        location: "Mumbai",
        sampleSize: "1,300 Face-to-Face Interviews",
        timeline: "3 Weeks",
      },
      demographic: "Individuals aged 21-45 years",
      respondents: ["Male and Female viewers"],
      sec: "A & B segments",
      keyInsights: [
        "Viewer engagement levels – How the audience connected with the show",
        "Content appeal – Elements that resonated with viewers",
        "Market demographics – Audience distribution across key SEC categories",
        "Opportunities for improvement – Suggestions for enhancing future programming",
      ],
      impactSummary:
        "With these insights, SOL Productions was able to refine its content strategy to better appeal to its target audience, enhancing both viewership and engagement.",
      whyDazzle:
        "At Dazzle Consultancy, we specialize in data-driven audience insights, enabling production houses like SOL Productions to make informed decisions that drive higher viewership and stronger brand loyalty.",
    },
  },
  {
    id: 3,
    image: samsung.src,
    title: "Advertising Tracking Research for Samsung",
    summary:
      "Dazzle Consultancy conducted an extensive advertising tracking research project for Samsung to measure the effectiveness, reach, and impact of their advertisements across key metropolitan and Tier 1 cities in India.",
    learnMoreLink: "/case-studies/samsung",
    details: {
      objective:
        "Our Consultants conducted an extensive advertising tracking research project for Samsung to measure the effectiveness, reach, and impact of their advertisements across key metropolitan and Tier 1 cities in India.",
      researchApproach: {
        locationsCovered: [
          "Mumbai",
          "Pune",
          "Ahmedabad",
          "Delhi",
          "Chandigarh",
          "Kolkata",
          "Bangalore",
          "Hyderabad",
          "Chennai",
        ],
        sampleSize: "600 Face-to-Face Interviews per Month",
        timeline: "1 Year (Monthly Tracking)",
      },
      demographic: "Individuals aged 21-55 years",
      respondents: ["Decision Makers (Household Wage Earners & Chief Wage Earners)"],
      sec: "A, B & C segments",
      keyInsights: [
        "Ad Effectiveness – Measuring recall, engagement, and conversion rates",
        "Brand Perception – Understanding how advertisements influence consumer sentiment",
        "Regional Impact – Identifying performance variations across different cities",
        "Optimization Opportunities – Strategic recommendations to enhance ad performance",
      ],
      impactSummary:
        "By leveraging these insights, Samsung was able to refine its advertising strategies for higher engagement and better ROI across multiple urban markets.",
      whyDazzle:
        "With deep expertise in advertising and consumer behavior analysis, Dazzle Consultancy delivers data-driven insights that empower brands like Samsung to optimize their marketing efforts and maximize campaign impact.",
    },
  },
  {
    id: 4,
    image: itc.src,
    title: "Shop Census for ITC Limited (Bingo)",
    summary:
      "Dazzle Consultancy conducted a comprehensive shop census for ITC Limited to map the availability, distribution, and retailer presence of Bingo! products in Mumbai.",
    learnMoreLink: "/case-studies/itc-limited",
    details: {
      objective:
        "Our Consultants conducted a comprehensive shop census for ITC Limited to map the availability, distribution, and retailer presence of Bingo! products in Mumbai.",
      researchApproach: {
        location: "Mumbai (MC – Municipal Corporation area)",
        sampleSize: "50,000 shops surveyed",
        timeline: "12 Weeks",
      },
      respondents: [
        "Shop owners/managers of Pucca Shops, including:",
        "Grocery Stores",
        "Kirana Shops",
        "Pan Bidi Shops",
        "Chemists",
        "General Stores",
        "Bakeries",
      ],
      keyInsights: [
        "Market Penetration – Mapping Bingo's distribution footprint in Mumbai",
        "Retailer Preferences – Understanding stocking behavior and demand",
        "Competitor Analysis – Identifying key competitors in the segment",
        "Growth Opportunities – Highlighting potential expansion areas",
      ],
      impactSummary:
        "These insights empowered ITC Limited to enhance its distribution network, optimize supply chain efficiency, and strengthen retailer engagement for Bingo! products.",
      whyDazzle:
        "With expertise in retail mapping and census research, Dazzle Consultancy helps brands like ITC Limited gain data-driven retail intelligence to strategically expand their market reach.",
    },
  },
  {
    id: 5,
    image: pred.src,
    title: "Predictorate Analytical Model for Campaign Optimization",
    summary: "Dazzle Research developed the 'Predictorate Model', a framework to analytically model consumer choice and forecast outcomes in complex campaign environments. It helps brands scientifically evaluate alternatives before implementation to optimize ROI and reduce risk.",
    learnMoreLink: "/case-studies/predictorate-model",
    details: {
      objective: "To create a predictive framework that can simulate consumer behavior and quantify the impact of different marketing campaigns or concepts before launch.",
      researchApproach: {
        location: "Multi-market model simulation",
        sampleSize: "Model-based (not interview-based)", 
        timeline: "Custom depending on complexity of alternatives"
      },
      respondents: [],
      demographic: "Target market segments as defined by campaign",
      sec: "Custom depending on brand needs",
      keyInsights: [
        "Quantified consumer preference for each campaign or concept.",
        "Simulated adoption curves and purchase probability.",
        "Identified campaign with the highest ROI and brand fit.",
        "Enabled data-backed decision making before media spend."
      ],
      impactSummary: "The Predictorate Model enabled clients to make scientifically validated campaign choices, optimizing returns and minimizing post-launch risk.",
      whyDazzle: "Dazzle Consultancy's expertise in predictive analytics and consumer choice modeling empowers brands to test strategies before market deployment, saving cost and improving performance."
    }
  }
]


// Map the detailed case studies to the simplified format for the carousel
const carouselCaseStudies: CarouselCaseStudy[] = caseStudiesData.map((study) => ({
  id: study.id,
  image: study.image,
  title: study.title,
  description: study.summary,
  learnMoreLink: study.learnMoreLink,
}))

export interface ResearchApproach {
  location?: string
  locationsCovered?: string[]
  sampleSize: string
  timeline: string
}

export interface CaseStudyDetails {
  objective: string
  researchApproach: ResearchApproach
  respondents: string[]
  demographic?: string
  sec?: string
  keyInsights: string[]
  impactSummary: string
  whyDazzle: string
}

export interface CaseStudy {
  id: number
  image: string
  title: string
  summary: string
  learnMoreLink: string
  details: CaseStudyDetails
}



export default function CaseStudies({ refer }: { refer: any }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slidePosition, setSlidePosition] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  const isFirstSlide = activeIndex === 0
  const isLastSlide = activeIndex === carouselCaseStudies.length - 1

  const changeSlide = useCallback(
    (nextIndex: number) => {
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
    },
    [isAnimating, activeIndex],
  )

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

  const goToSlide = useCallback(
    (index: number) => {
      if (index === activeIndex) return
      changeSlide(index)
    },
    [activeIndex, changeSlide],
  )

  // Current case study
  const currentCase = carouselCaseStudies[activeIndex]

  const openCaseStudyModal = (id: number) => {
    const caseStudy = caseStudiesData.find((study) => study.id === id) || null
    setSelectedCaseStudy(caseStudy)
    setModalOpen(true)
  }

  const closeCaseStudyModal = () => {
    setModalOpen(false)
  }

  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-subheading mt-2 text-center font-bold">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-orange-700 via-red-600 to-red-700 text-transparent bg-clip-text">
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
                isFirstSlide ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-900",
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
                isLastSlide ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-900",
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
                  <div className="h-[400px] md:h-[500px] w-full flex items-center justify-center">
                    <img
                      src={currentCase.image || "/placeholder.svg"}
                      alt={currentCase.title}
                      className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-6 md:p-8 md:col-span-2 bg-white">
                    <div className="max-w-2xl" ref={refer}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif tracking-tight">
                        {currentCase.title}
                      </h3>
                      <p className="text-gray-700 mb-6 text-base leading-relaxed">{currentCase.description}</p>
                      <button
                        onClick={() => openCaseStudyModal(currentCase.id)}
                        className="inline-flex items-center text-orange-700 font-medium hover:text-orange-800 transition-colors group"
                      >
                        Learn more about this case study
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {carouselCaseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-orange-700 w-12" : "bg-gray-300 w-8 hover:bg-gray-400",
                )}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal isOpen={modalOpen} onClose={closeCaseStudyModal} caseStudy={selectedCaseStudy} />
    </section>
  )
}
