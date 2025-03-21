"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProtocolSection {
  title: string
  items: string[]
}

export default function FieldProtocols() {
  const protocolsData = [
    {
      title: "Set up Stage",
      items: [
        "Interviewer force deployment based on study scope and required skills",
        "Project briefing conducted by management staff",
        "Extensive mock sessions for interviewer qualification",
        "Questionnaire translation handling by experienced in-house staff",
      ],
    },
    {
      title: "Fieldwork Stage",
      items: [
        "Real-time data quality monitoring",
        "Daily progress tracking and reporting",
        "Field team coordination and support",
        "Quality control checks and verifications",
      ],
    },
    {
      title: "Reporting to Client",
      items: [
        "Comprehensive data analysis",
        "Detailed findings presentation",
        "Recommendations and insights",
        "Final report documentation",
      ],
    },
  ]

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <section className="w-full  pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-subheading mt-2 mb-6 text-center font-bold">Field Quality <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text ">Protocols</span></h2>
            <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto font-content">
              Rigorously implemented and executed in all stages of field operations
            </p>
          </div>

          <div className="space-y-4">
            {protocolsData.map((protocol) => (
              <div key={protocol.title} className="w-full">
                <button
                  onClick={() => toggleSection(protocol.title)}
                  className="w-full group focus:outline-none rounded-xl"
                >
                  <div className="relative w-full p-4 rounded-xl bg-secondary border border-button/25 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-between">
                    <span className="text-lg text-text font-content">
                      {protocol.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-button transition-transform duration-200",
                        openSections[protocol.title] ? "rotate-180" : "",
                      )}
                    />
                  </div>
                </button>
                
                {/* Animated Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={openSections[protocol.title] ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 p-4 rounded-lg bg-secondary border border-button/25 shadow-inner">
                    <ul className="list-disc list-inside space-y-2">
                      {protocol.items.map((item, index) => (
                        <li key={index} className="text-base text-text/80 font-content">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
