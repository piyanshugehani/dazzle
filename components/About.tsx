"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Award, Lightbulb, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
                <div className="aspect-video relative">
                  <Image
                    src="https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2019/10/Experience-Consulting-Services.jpg"
                    alt="Data analysis team"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR4hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
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
                <div className="aspect-video relative">
                  <Image
                    src="https://imageio.forbes.com/specials-images/imageserve/622f537312400185df5a46d1/0x0.jpg"
                    alt="Client success metrics"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR4hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
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

        {/* Benefits */}
        <BenefitsWheel/>
      </div>
    </section>
  )
}
