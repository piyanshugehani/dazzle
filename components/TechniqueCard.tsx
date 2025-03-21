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
      <div className="hidden md:flex bg-secondary-light rounded-xl shadow-md overflow-hidden p-8 md:p-12 m-2 flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-subheading font-semibold text-button">{title}</h3>
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
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={500}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Mobile Card */}
      <div className="flex md:hidden bg-secondary-light rounded-xl shadow-md p-6 flex-col gap-4 items-center text-center w-full max-w-sm mx-auto">
        <h3 className="text-xl font-subheading font-semibold text-button">{title}</h3>
        <p className="text-lg font-content text-button/80">{description}</p>
        <ul className="space-y-2 flex-1 flex flex-col justify-center list-disc p-5 text-left w-full text-button text-sm">
          {features?.map((feature, index) => (
            <li key={index}>{feature}</li>
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
        <h1 className="text-4xl md:text-5xl font-subheading font-bold my-4 text-center">
          Data <span className="bg-gradient-to-r from-orange-700 via-button to-button text-transparent bg-clip-text"> Collection Techniques</span>
        </h1>

        {/* Carousel Container */}
        <div className="relative max-w-lg md:max-w-4xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {techniques.map((technique, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TechniqueCard {...technique} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-4 py-6">
          <button onClick={prevSlide} className="p-3 rounded-full border border-button text-button hover:bg-button hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full border border-button text-button hover:bg-button hover:text-white transition">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}