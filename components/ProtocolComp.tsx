"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
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
    <div className="w-full min-h-[300px] bg-gradient-to-b from-[#e9dec8] to-[#cbac72] p-6 pb-16 md:pt-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl text-amber-950/90 font-heading">Field Quality Protocols</h1>
          <p className="text-sm md:text-base text-amber-950/80 max-w-md font-content">
            Rigorously implemented and executed in all stages of field operations
          </p>
        </div>

        <div className="space-y-4 font-subheading">
          {protocolsData.map((protocol) => (
            <div key={protocol.title} className="w-full">
              <button onClick={() => toggleSection(protocol.title)} className="w-full group">
                <div
                  className="relative w-full p-2.5 rounded-xl bg-gradient-to-r from-[#E6D0B3] to-neutral-200 
                              border border-amber-950/60 shadow-lg hover:shadow-xl transition-all duration-200
                              flex items-center justify-between"
                >
                  <span className="text-center md:text-md font-medium text-amber-950">{protocol.title}</span>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-amber-950/90 transition-transform duration-200",
                      openSections[protocol.title] ? "rotate-180" : "",
                    )}
                  />
                </div>
              </button>
              {openSections[protocol.title] && (
                <div className="my-4 ml-4 p-4 rounded-lg bg-amber-50/70 border border-amber-200/60 shadow-inner">
                  <ul className="list-disc list-inside space-y-2 font-content">
                    {protocol.items.map((item, index) => (
                      <li key={index} className="text-sm md:text-base text-amber-950/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

