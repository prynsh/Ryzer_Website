import React from "react";
import "../index.css";
import iphone from "../assets/iphone-magic-min.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-[1000px] bg-white pt-40">
      {/* background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* actual content inside Hero */}
      <div className="relative z-10 text-center h-full space-y-5">
        <h1 className="text-8xl font-bold text-gray-800">
          INVEST IN WHAT'S <br /> REAL & VISIBLE
        </h1>
        <h3 className="text-lg">
          Buy and sell real estate as easily as trading stocks. Starting at <br />$100, with instant liquidity, Finally an exchange for Real Estate.
        </h3>
        <h5 className="text-md font-semibold">Regulated SandBox by Qatar Financial Center(QFC)</h5>

        {/* Easing in image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeIn" }}
          className="flex justify-center items-center"
        >
          <motion.img
            src={iphone}
            height={700}
            width={700}
            alt="iPhone"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
