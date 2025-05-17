"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ResearchApproach {
  location?: string
  locationsCovered?: string[]
  sampleSize: string
  timeline: string
}

interface CaseStudyDetails {
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

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  caseStudy: CaseStudy | null
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!caseStudy) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-950 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{caseStudy.title}</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6 space-y-8"
            >
              <div className="grid gap-8">
                <section className="space-y-3">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Objective</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.details.objective}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Research Approach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                    {caseStudy.details.researchApproach.location && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Location</h4>
                        <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.researchApproach.location}</p>
                      </div>
                    )}
                    {caseStudy.details.researchApproach.locationsCovered && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Locations Covered</h4>
                        <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.researchApproach.locationsCovered.join(", ")}</p>
                      </div>
                    )}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Sample Size</h4>
                      <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.researchApproach.sampleSize}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Timeline</h4>
                      <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.researchApproach.timeline}</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Respondents</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {caseStudy.details.respondents.map((respondent, index) => (
                      <li key={index}>{respondent}</li>
                    ))}
                  </ul>
                </section>

                {caseStudy.details.demographic && (
                  <section className="space-y-3">
                    <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Target Demographic</h3>
                    <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.demographic}</p>
                  </section>
                )}

                {caseStudy.details.sec && (
                  <section className="space-y-3">
                    <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Socio-Economic Classification</h3>
                    <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.sec}</p>
                  </section>
                )}

                <section className="space-y-3">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Key Insights & Impact</h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    {caseStudy.details.keyInsights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">{caseStudy.details.impactSummary}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-500">Why Dazzle Consultancy?</h3>
                  <p className="text-gray-700 dark:text-gray-300">{caseStudy.details.whyDazzle}</p>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
