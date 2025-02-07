"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.2 },
};

export default function AnimatedSection({ children, className }) {
  return (
    <motion.div className={className} {...fadeIn}>
      {children}
    </motion.div>
  );
}
