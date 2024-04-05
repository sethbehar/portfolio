"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import "../styles/Box.css";

export default function Box({ color, children, onClick, animationVariant }) {
  // Animation variants for sliding from different directions
  const variants = {
    fromTop: {
      initial: { y: "-100vh", opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    fromBottom: {
      initial: { y: "100vh", opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    fromLeft: {
      initial: { x: "-100vw", opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    fromRight: {
      initial: { x: "100vw", opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  };

  // Use React's useState hook to manage the pointerEvents state
  const [pointerEvents, setPointerEvents] = useState("auto");

  // Correctly applying the selected variant
  const selectedVariant = variants[animationVariant] || variants.fromTop; // Default to 'fromTop' if not specified

  return (
    <motion.div
      className='box'
      style={{
        height: "15rem",
        width: "25rem",
        boxShadow: "10px 10px 28px -1px rgba(0,0,0,0.1)",
        padding: "36px 42px", 
        borderRadius: "32px", 
        overflow: "hidden", 
        background: color,
        pointerEvents: pointerEvents, // Apply the pointerEvents state to style
      }}
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onClick={onClick}
      onAnimationStart={() => setPointerEvents("none")} // Disable pointer events when animation starts
      onAnimationComplete={() => setPointerEvents("auto")} // Re-enable pointer events after animation
    >
      {children}
    </motion.div>
  );
}
