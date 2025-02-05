import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface TechniqueCardProps {
  title: string;
  description: string;
  features: string[];
  image?: string;
}

export function TechniqueCard({ title, description, features = [], image }: TechniqueCardProps) {
  return (
    <>
  {/* Desktop Card */}
  <div className="hidden md:flex bg-secondary-light rounded-xl shadow-lg p-8 md:p-12 flex-col md:flex-row gap-8 items-center">
    <div className="flex-1 space-y-6">
      <h3 className="text-xl font-subheading text-button">{title}</h3>
      <p className="text-lg font-subheading text-button/80">{description}</p>
      <ul className="space-y-4">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="rounded-full bg-[#FFF5F5] p-1">
              <Check className="w-4 h-4 text-[#E86A33]" />
            </span>
            <span className="text-button font-content">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 relative">
      <Image src={image || "/placeholder.svg"} alt={title} width={500} height={200} className="object-cover" />
    </div>
  </div>

  {/* Mobile Card */}
  <div className="flex md:hidden bg-secondary-light rounded-xl shadow-lg p-6 flex-col gap-4 items-center text-center max-w-[60%]">
    <h3 className="text-lg font-subheading text-button">{title}</h3>
    <p className="text-lg font-content text-button/80">{description}</p>
    <ul className="space-y-2">
      {features?.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 justify-center">
          <span className="rounded-full bg-[#FFF5F5] p-2">
            <Check className="w-4 h-4 text-[#E86A33]" />
          </span>
          <span className="text-button text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Image src={image || "/placeholder.svg"} alt={title} width={300} height={150} className="object-cover w-full max-h-32 rounded-lg" />
  </div>
</>

  );
}

export function Carousel({ techniques }: { techniques: TechniqueCardProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techniques.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techniques.length) % techniques.length);
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl italic font-heading font-semibold bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text mb-6 text-center">Data Collection Techniques</h2>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {techniques.map((technique, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TechniqueCard {...technique} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation at Bottom */}
          <div className="flex justify-center gap-4 py-6">
            <button onClick={prevSlide} className="p-3 rounded-full border-button border text-button">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-button text-button">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
