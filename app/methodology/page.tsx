"use client"

import ResearchExperience from "@/components/ExperienceCard"
import Slide from "@/components/Slide"
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
      title: "Telephonic & Digital Interviews", // 34 chars
      description: "Comprehensive data collection via phone, web, and digital surveys, ensuring accuracy.", // 100 chars
      features: [
        "CATI (Phone surveys, tech-assisted)", // 38 chars
        "CAPI (In-person, structured approach)", // 38 chars
        "Web-based surveys with real-time checks", // 38 chars
        "Real-time data validation, quality assured", // 38 chars
      ],
      image: "https://imengine.prod.srp.navigacloud.com/?uuid=9e938250-05ca-5b41-ab37-dd049b75dea7&type=primary&q=75&width=1000",
    },
    {
      title: "Face-to-Face Research", // 34 chars
      description: "In-depth, structured interactions to gain rich insights through face-to-face engagement.", // 100 chars
      features: [
        "Randomized fieldwork sampling method", // 38 chars
        "Purposive targeting for precise data", // 38 chars
        "Highly trained teams across India", // 38 chars
        "Stringent QC ensures data validity", // 38 chars
      ],
      image: "https://ffind.com/app/uploads/2021/07/Disadvantages-face-to-face-interviews-1280x0-c-default.webp",
    },
    {
      title: "Specialized Research Methods", // 34 chars
      description: "Tailored market insights through advanced research techniques to fit industry demands.", // 100 chars
      features: [
        "Mystery shopping for unbiased review", // 38 chars
        "Exit interviews for key retail insights", // 38 chars
        "Focus Groups capture diverse opinions", // 38 chars
        "Panel studies track evolving trends", // 38 chars
      ],
      image: "https://images.unsplash.com/photo-1561485010-84de4c6f06b9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center sm:mt-20">
        {/* Background Image */}
        

        {/* Dark Overlay with Blur Only on Mobile
        <div className="absolute inset-0 bg-white/25 backdrop-blur-sm "></div> */}


        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 ">
          <motion.h1
           className="text-4xl md:text-5xl font-subheading font-bold mt-10"
            {...fadeIn}
          >
            Research <span className="bg-gradient-to-r from-orange-700 via-button to-button text-transparent bg-clip-text">Methodologies</span> <span className="bg-gradient-to-r from-orange-700 via-button to-button text-transparent bg-clip-text"></span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl font-content text-gray-600"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Delivering Data-Driven Insights with Precision & Expertise
          </motion.p>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { icon: BarChart2, title: "Quantitative & Qualitative Research" },
              { icon: FileSearch, title: "Desk Research & Data Analytics" },
              { icon: Users, title: "Sector & Market Expert Consultations" },
              { icon: Brain, title: "Knowledge Technology & Forecasting Models" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-secondary-light p-10 rounded-xl shadow-lg text-md font-content text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#E86A33]" />
                <h3 className="text-md font-content text-button">{item.title}</h3>
              </motion.div>
            ))}
          </div> */}
          <div className="gap-4 mt-10"><Slide/></div>
          
        </div>
      </section>
{/* 
      const imageSources = [
    "https://vertify.com/wp-content/uploads/2023/10/Rev-Growth-1024x576.png",
    "https://media.licdn.com/dms/image/v2/D5612AQGk8BddkXBnpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722267121812?e=1747872000&v=beta&t=vfkLmBP7IBSBnv9tH6lnzASoBccfm6obwrVE2ZSdXrU",
    "https://vivacf.net/wp-content/uploads/2023/07/How-to-Future-proof-Your-Business-Finances.jpg",
    "https://johpartners.com/wp-content/uploads/2023/12/Human-Element-of-Transformation-joh-partners-1024x683.webp",
  ]; */}
      {/* Research Methodologies
      <section className="px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          
         
        </motion.div>
      </section> */}

      {/* Data Collection Techniques */}
      <section className="">
        <motion.div
          className="max-w-full mx-auto"
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
          <motion.h1
           className="text-4xl md:text-5xl font-subheading font-bold my-4 text-center"
            {...fadeIn}
          >
            Experiences in <span className="bg-gradient-to-r from-orange-700 via-button to-button text-transparent bg-clip-text"></span> <span className="bg-gradient-to-r from-orange-700 via-button to-button text-transparent bg-clip-text">Social Research</span>
          </motion.h1>
          
          <ResearchExperience />
        </motion.div>
      </section>


    </div>
  )
}

