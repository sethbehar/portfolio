"use client"
import { motion } from 'framer-motion';

export default function Box({ color, children }) {
  // Define your animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='box'
      style={{
        height: "25rem",
        width: "35rem",
        backgroundColor: color,
        borderRadius: "2rem",
        border: "1px solid black",
        color: "white",
        boxShadow: "10px 10px 28px -1px rgba(0,0,0,0.38)",
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
