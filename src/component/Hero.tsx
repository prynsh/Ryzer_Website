import React from "react";
import "../index.css"

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] bg-white">
      {/* background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* actual content inside Hero */}
      <div className="relative z-10 text-center h-full space-y-5">
        <h1 className="text-4xl font-bold text-gray-800">
          INVEST IN WHAT'S <br /> REAL & VISIBLE
        </h1>
        <h3>
         Buy and sell real estate as easily as trading stocks. Starting at <br/>$100, with instant liquidity, Finally an exchange for Real Estate.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
