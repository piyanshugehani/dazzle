"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Award, Lightbulb, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import BenefitsWheel from "./Benefits"

export default function AboutUs() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-red-50 blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-red-100 blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hook Section */}
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading mt-2 mb-6 text-center italic font-bold">Transforming <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text ">Data</span> into <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text">Success</span></h2>

          <motion.p
            className="font-subheading text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            In today's fast-paced, data-driven world, businesses don't just need information—they need intelligence that
            fuels success. At Dazzle Consulting, we don't just analyze data; we transform it into game-changing
            strategies.
          </motion.p>
        </motion.div> */}

  
       {/* Experience & Credibility */}
       <motion.div
          className="mb-24 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <h2 className="text-3xl md:text-5xl font-subheading mt-2 mb-12 text-center font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">
              Expertise
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-button via-button to-button text-transparent bg-clip-text">
              Impact
            </span>
          </h2>

          {/* First card - Image left, content right */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-0.5 bg-red-600/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2019/10/Experience-Consulting-Services.jpg"
                  alt="Data analysis team"
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl mb-6 flex items-center">
                <Users className="mr-3 text-red-600" />
                Proven Expertise
              </h2>
              <p className="font-content text-gray-700 mb-6 leading-relaxed">
                From decoding audience behaviors for Star TV and MTV to driving market insights for Unilever and Maruti
                Suzuki, our expertise has shaped decisions for the biggest brands.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Star TV", "MTV", "Unilever", "Maruti Suzuki"].map((client) => (
                  <span key={client} className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-subheading">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Second card - Content left, image right */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-0.5 bg-red-600/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/622f537312400185df5a46d1/0x0.jpg?format=jpg&width=1200"
                  alt="Client success metrics"
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl mb-6 flex items-center">
                <Award className="mr-3 text-red-600" />
                Measurable Impact
              </h2>
              <p className="font-content text-gray-700 mb-6 leading-relaxed">
                Our track record speaks for itself. We've helped clients achieve remarkable results:
              </p>
              <ul className="space-y-3 font-content text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Optimized viewership by 35% for Star TV</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Increased market share by 22% for consumer brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Reduced customer acquisition costs by 40%</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>


        {/* Unique Methodologies */}
        {/* <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
         <h2 className="text-3xl md:text-5xl font-heading mt-2 mb-6 text-center italic font-bold">Our <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text ">Innovative</span> Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-red-600" />,
                title: "Brand Passion Index",
                description:
                  "Our groundbreaking methodology that redefined media planning by measuring emotional connections.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                title: "Attention Index",
                description: "Setting new global benchmarks in television and digital engagement metrics.",
              },
              {
                icon: <Users className="h-10 w-10 text-red-600" />,
                title: "Audience Intelligence",
                description: "Proprietary algorithms that predict consumer behavior with unprecedented accuracy.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2, duration: 0.8 },
                  },
                }}
              >
                <div className="absolute -inset-0.5 bg-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg border border-red-50 h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="font-heading text-2xl mb-4">{item.title}</h3>
                  <p className="font-content text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

       {/* Benefits */}
        <BenefitsWheel/>

        {/* CTA */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
          }}
        >
          <h2 className="text-3xl md:text-5xl font-subheading mt-2 mb-6 text-center font-bold">Partner with <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text ">Dazzle </span>Consulting</h2>
          <p className="font-content text-xl text-gray-700 mb-10">
            Turn insights into impact. Let's shape the future—together.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 via-button to-button text-white font-subheading text-lg rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

