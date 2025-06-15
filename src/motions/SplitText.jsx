"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText({ style, words }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Show the container once fonts are loaded
      containerRef.current.style.visibility = "visible";

      const heading = containerRef.current.querySelector("h1");
      if (!heading) return;

      const { words } = splitText(heading);

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 5,
          bounce: 0,
          delay: stagger(0.2),
        }
      );
    });
  }, []);

  return (
    <div className={style} ref={containerRef}>
      <h1 className="h1">
        {words}
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
