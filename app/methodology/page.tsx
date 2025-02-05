"use client"

import ResearchExperience from "@/components/ExperienceCard"
import { Carousel, TechniqueCard } from "@/components/TechniqueCard"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart2,
  FileSearch,
  Users,
  Brain,
  CheckCircle,
  Phone,
  UserCheck,
  Store,
  PieChart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function MethodologiesPage() {
  

const techniques = [
  {
    title: "Telephonic & Digital Interviews",
    description: "Comprehensive data collection through multiple channels ensuring maximum reach and accuracy",
    features: [
      "CATI (Computer Assisted Telephone Interviewing)",
      "CAPI (Computer Assisted Personal Interviewing)",
      "Web-based surveys and interviews",
      "Real-time data validation and quality checks",
    ],
    image: "https://images.unsplash.com/photo-1561485010-84de4c6f06b9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Face-to-Face Research",
    description: "In-depth personal interactions for qualitative and quantitative insights",
    features: [
      "Random sampling methodology",
      "Purposive sampling for targeted research",
      "Trained field force across India",
      "Strict quality control measures",
    ],
    image: "https://images.unsplash.com/photo-1561485010-84de4c6f06b9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Specialized Research Methods",
    description: "Custom research approaches for specific industry needs",
    features: [
      "Mystery shopping programs",
      "Exit interviews at point of sale",
      "Focus Group Discussions (FGDs)",
      "Panel studies and tracking research",
    ],
    image: "https://images.unsplash.com/photo-1561485010-84de4c6f06b9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]


  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Research background"
          fill
          className="object-cover opacity-70 brightness-90"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text mb-4 pt-24" {...fadeIn}>
            Our Methodologies & Experiences
          </motion.h1>
          <motion.p className="text-lg md:text-xl font-subheading" {...fadeIn} transition={{ delay: 0.2 }}>
            Delivering Data-Driven Insights with Precision & Expertise
          </motion.p>
        </div>
      </section>

      {/* Research Methodologies */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-semibold italic bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text mb-6 text-center">Research Methodologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BarChart2, title: "Quantitative & Qualitative Research" },
              { icon: FileSearch, title: "Desk Research & Data Analytics" },
              { icon: Users, title: "Sector & Market Expert Consultations" },
              { icon: Brain, title: "Knowledge Technology & Forecasting Models" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-secondary-light p-2 rounded-xl shadow-lg text-md font-content text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#E86A33]" />
                <h3 className="text-md font-content text-button">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Data Collection Techniques */}
<section className="px-4 md:px-8">
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <Carousel techniques={techniques} />
  </motion.div>
</section>



      {/* Client Experiences */}
      <section className="pb-24 mt-8 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading italic font-semibold bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text mb-6 text-center">Experiences in Social Research</h2>
          <ResearchExperience/>
        </motion.div>
      </section>

    
    </div>
  )
}

