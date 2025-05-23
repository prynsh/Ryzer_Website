import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isDarkBg?: boolean; // Add this prop
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = "",
  onClick,
  isDarkBg = false, // Default to false
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !spanRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(spanRef.current, { duration: 0.08, yPercent: -150, ease: "power2.in" });
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
      className={`
        inline-grid
        rounded-full
        px-4 py-1
        items-center
        w-[130px]
        mx-[5px]
        my-[10px]
        overflow-hidden
        relative
        h-[40px]
        transition-colors duration-300
        ${isDarkBg ? 'text-black border-black bg-white' : 'text-white border-white bg-[#434242]'}
        ${className}
      `}
    >
      <span ref={spanRef} className="relative block z-10">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
