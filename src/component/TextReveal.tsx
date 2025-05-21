import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  fromColor?: string;
  toColor?: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  fromColor = "#9CA3AF",
  toColor = "#000000",
  className = "",
}) => {
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      charsRef.current,
      {
        backgroundPositionX: "100%",
        backgroundImage: `linear-gradient(to right, ${toColor} 50%, ${fromColor} 50%)`,
      },
      {
        backgroundPositionX: "0%",
        ease: "none",
        stagger: 0.02,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",   // Start animation when the top of container hits 80% of viewport
          end: "bottom 70%",  // End when bottom of container hits 20% of viewport
          scrub: true,        // Link animation progress to scroll
        },
      }
    );

    ScrollTrigger.refresh();
  }, [fromColor, toColor]);
  

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((char, index) => {
  if (char === "\n") {
    return (
      <span
        key={index}
        ref={(el) => el && (charsRef.current[index] = el)}
        className="block h-6" // acts like a <br />
        aria-hidden="true"
      >
        &nbsp;
      </span>
    );
  }

  return (
    <span
      key={index}
      ref={(el) => el && (charsRef.current[index] = el)}
      className="inline-block text-transparent bg-clip-text bg-[length:200%_100%] bg-[position-x:100%]"
      style={{
        backgroundImage: `linear-gradient(to right, ${toColor} 50%, ${fromColor} 50%)`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
})}


    </div>
  );
};

export default TextReveal;
