import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function AnimatedTestimonialsDemo() {
  const services = [
    {
      quote:
        "Combining numerical analysis with subjective evaluations to gain a comprehensive understanding of data trends, behaviors, and underlying patterns.",
      name: "Quantitative & Qualitative",
      designation: "",
      src: "https://theforage.wpengine.com/wp-content/uploads/2023/04/what-is-qualitative-research-1.jpg", // You can set a placeholder image or remove the image usage in the component.
    },
    {
      quote:
        "Leveraging statistical techniques, machine learning, and AI-driven models to predict future trends, optimize decision-making, and enhance strategic planning.",
      name: "Modeling & Forecasting",
      designation: "",
      src: "https://bridgepointconsulting.com/wp-content/uploads/2023/09/top-questions-ask-before-modeling-forecasting-revenue-tips-strategies-growth.jpg",
    },
    {
      quote:
        "Conducting thorough investigations using published reports, market studies, academic research, and literature reviews to extract valuable insights and support informed decision-making.",
      name: "Desk Research",
      designation: "",
      src: "https://www.marketing91.com/wp-content/uploads/2020/08/Resources-of-desk-research.jpg",
    },
    {
      quote:
        "Engaging with industry professionals, thought leaders, and domain experts to gain deep insights, validate findings, and ensure practical applicability of research outcomes.",
      name: "Sector & Expert Consultation",
      designation: "",
      src: "https://startupnv.org/wp-content/uploads/2023/04/woman-consulting-with-a-business-expert-1-1024x683.jpg",
    },
    {
      quote:
        "Integrating artificial intelligence, machine learning, and automated systems to enhance knowledge management, streamline information retrieval, and improve decision-support systems.",
      name: "Knowledge Technology",
      designation: "",
      src: "https://blog.emb.global/wp-content/uploads/2024/08/What-is-a-Knowledge-Hub-Things-to-Know-696x390.webp",
    },
    {
      quote:
        "Utilizing advanced data processing techniques, visualization tools, and analytical frameworks to uncover meaningful patterns, trends, and actionable insights from raw data.",
      name: "Data Analytics",
      designation: "",
      src: "https://fsa2-assets.imgix.net/assets/iStock-1363104964.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=675&ixlib=php-3.3.1&w=1200",
    },
  ]

  return <AnimatedTestimonials testimonials={services} />
}
