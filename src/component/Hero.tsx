import { useEffect, useRef } from "react";
import "../index.css";
import iphone from "../assets/iphone-magic-min.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Backed from "./Backed";
import { SplitText } from "gsap/all";
import qfc from "../assets/QFC-min.png";
import TextReveal from "./TextReveal";
import Features from "./Features";
import Cursor from "./Cursor";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const imgRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const split = SplitText.create(".h1", {
      type: "chars",
    });
    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });

    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.to(imgRef.current, {
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
   <div className="relative w-full overflow-hidden">


      <div className="relative z-10 text-center h-full ">
        <div className="relative w-full h-[400px]">
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: "url('https://www.ryzer.app/wp-content/uploads/2024/09/BG-6.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    ></div>

    {/* h1 text stays above the background image */}
    <h1 className="h1 text-8xl font-bold text-gray-800 relative z-10 pt-40">
      INVEST IN WHAT'S <br /> REAL & VISIBLE
    </h1>
  </div>
  <div>

        <h3 ref={subheadingRef} className="text-lg">
          Buy and sell real estate as easily as trading stocks. Starting at{" "}
          <br />
          $100, with instant liquidity, Finally an exchange for Real Estate.
        </h3>
        <h5 className="text-md font-semibold flex justify-center ">
          Regulated SandBox by Qatar Financial Center(QFC)
        </h5>
  </div>
        <div className="flex justify-center">
          <img
            className="flex justify-center"
            src={qfc}
            height={200}
            width={200}
          ></img>
        </div>
        <motion.div className="flex justify-center pt-30">
          <motion.img
            ref={imgRef}
            src={iphone}
            height={700}
            width={700}
            alt="iPhone"
          />
        </motion.div>
        <div className="space-y-5">
          <p className="font-semibold text-gray-800">
            Trade with Confidence, Backed by the best.
          </p>
          <Backed />
        </div>
        <div>
          <p className="font-semibold text-gray-800">
            Experience real estate like crypto
          </p>
        </div>
        <div className="space-y-8">
          <h1 className="h1 text-7xl font-bold text-gray-800">
            THE FUTURE OF <br /> REAL WORLD ASSETS
          </h1>
          <TextReveal
            text={`Explore the power of investing in tokenized real world assets\nand discover the next chapter in your investing journey`}
            fromColor="#D1D5DB"
            toColor="#000000"
           className="text-lg font-vietnam"/>
        </div>
        <div className="">
          <Features />
        </div>
        <div>
            Marquee component
        </div>
        <Cursor/>
      </div>
    </div>
  );
};

export default Hero;
