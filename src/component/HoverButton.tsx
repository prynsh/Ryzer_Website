// components/AnimatedButton.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = "", onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !spanRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(spanRef.current, { duration: 0.1, yPercent: -150, ease: "power2.in" });
    tl.set(spanRef.current, { yPercent: 150 });
    tl.to(spanRef.current, { duration: 0.2, yPercent: 0 });

    const handleEnter = () => tl.play(0);

    const btn = buttonRef.current;
    btn.addEventListener("mouseenter", handleEnter);

    return () => btn.removeEventListener("mouseenter", handleEnter);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`inline-grid border border-black rounded-full px-4 py-1 items-center w-[130px] mx-[5px] my-[10px] text-white bg-[#434242] overflow-hidden  relative h-[40px] ${className}`}
    >
      <span ref={spanRef} className="relative block z-10">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
