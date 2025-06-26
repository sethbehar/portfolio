"use client";

import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

export default function ScatterText({ style }) {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
  if (!containerRef.current) return;

  const paragraphs = containerRef.current.querySelectorAll(".p");
  if (!paragraphs.length) return;

  const allChars = [];

  paragraphs.forEach((para) => {
    const { chars } = splitText(para);
    allChars.push(...chars);
  });

  const handlePointerMove = (event) => {
    const now = performance.now();
    const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
    prevEvent.current = now;
    velocityX.set(event.movementX / timeSinceLastEvent);
    velocityY.set(event.movementY / timeSinceLastEvent);
  };

  document.addEventListener("pointermove", handlePointerMove);

  hover(allChars, (element) => {
    const speed = Math.sqrt(
      velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
    );
    const angle = Math.atan2(velocityY.get(), velocityX.get());
    const distance = speed * 0.1;

    animate(
      element,
      {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      },
      { type: "spring", stiffness: 100, damping: 50 }
    );
  });

  return () => {
    document.removeEventListener("pointermove", handlePointerMove);
  };
}, []);


  return (
    <div className={style} ref={containerRef}>
      <p className="p">I'm a software engineer with a passion for building</p>
      <p className="p">I turned my portfolio into a SaaS. The features are hidden behind a payawall :)</p>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .split-char {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
