"use client"
import { motion } from "framer-motion"
import type React from "react"
import { useState } from "react"

export default function page() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    companySchool: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log("response", response)
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({
          inquiryType: "",
          name: "",
          email: "",
          companySchool: "",
          subject: "",
          message: ""
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <motion.h1
                className="text-3xl ml-2 md:text-4xl font-subheading font-bold mt-6 mb-3"
                {...fadeIn}
              >
                Let's <span className="bg-gradient-to-r from-orange-700 via-button to-button text-transparent bg-clip-text">Connect!</span>
              </motion.h1>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <p className="font-content text-gray-700 leading-relaxed mb-6">
                  Dazzle has proudly served clients seeking data consulting and analytics solutions with 
                  precision and excellence. We partner closely with businesses to transform their data into 
                  actionable insights, and regularly share our expertise through industry workshops and 
                  technology conferences.
                </p>
                <div className="space-y-1">
                  <div>
                    <span className="font-content font-semibold text-gray-900">Email:</span>
                    <a href="mailto:dazzle.outreach@gmail.com" className="ml-2 text-red-600 hover:text-red-700 transition-colors font-content">dazzle.outreach@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-subheading font-semibold text-button mb-6">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="inquiryType" className="block text-sm font-subheading text-gray-900 mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="font-content w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="client-service">Client-service inquiries</option>
                    <option value="recruiting">Recruiting information</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="name" className="block text-sm font-subheading text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-content w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-subheading text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-content w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="group">
                  <label htmlFor="companySchool" className="block text-sm font-subheading text-gray-900 mb-2">
                    Company or School
                  </label>
                  <input
                    type="text"
                    id="companySchool"
                    name="companySchool"
                    value={formData.companySchool}
                    onChange={handleInputChange}
                    className="font-content w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your company or school name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-subheading text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="font-content w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter message subject"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-subheading text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="font-content w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-button to-button 
                                 hover:from-button hover:to-button transition-all duration-300 
                                 text-white px-6 py-2 rounded-full text-lg font-content 
                                 before:content-[''] before:absolute before:top-0 before:left-[-75%] 
                                 before:w-1/3 before:h-full before:bg-white/20 before:skew-x-[-25deg] 
                                 before:transition-all before:duration-500 hover:before:left-[125%] mr-2 cursor-pointer
                                 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-700 to-button rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-content mb-2">Ask a Question Here</h3>
                <p className="font-content text-red-100 mb-6 text-sm">Get expert advice from our certified specialists</p>
              </div>
            </div>

            {/* Who we are Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-subheading font-semibold text-button mb-6 pb-3 border-b border-gray-200">
                Who we are
              </h3>
              <div className="space-y-4">
                <div className="group">
                  <p className="font-content text-sm text-gray-700 py-2 border-b border-gray-100">
                    {">"} Knowledge Process Outsourcing (KPO) service provider in the world
                  </p>
                </div>
                <div className="group">
                  <p className="font-content text-sm text-gray-700 py-2 border-b border-gray-100">
                    {">"} Deep understanding of client needs through extensive experience of working with several large corporates and top consulting firms
                  </p>
                </div>
                <div className="group">
                  <p className="font-content text-sm text-gray-700 py-2 border-b border-gray-100">
                    {">"} Customized methodology and analysis for delivering actionable results; client-specific dashboards for ease of interpretation and use
                  </p>
                </div>
                <div className="group">
                  <p className="font-content text-sm text-gray-700 py-2 border-b border-gray-100">
                    {">"} Data processing through strategically located operation hubs
                  </p>
                </div>
                <div className="group">
                  <p className="font-content text-sm text-gray-700 py-2 border-b border-gray-100">
                    {">"} Strong focus on client servicing and project management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
