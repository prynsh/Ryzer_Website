// import  { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import gif from "../assets/Shot_1.gif";
// import gif2 from "../assets/svg-2.png";
// import gif3 from "../assets/svg-3.png";

// gsap.registerPlugin(ScrollTrigger);

// const cards = [
//   {
//     id: 1,
//     title: "REAL ESTATE",
//     description:
//       "Invest in tokenized real estate and earn passive income through fractional ownership. Secure, transparent, and backed by real assets, giving you exposure to high-yield properties without the management hassle.",
//     tag: "01",
//     buttonText: "Live now",
//     image: gif,
//     bgColor: "#d2e2fe",
//   },
//   {
//     id: 2,
//     title: "GOLD",
//     description:
//       "Invest in real gold through secure, blockchain-backed tokens. Buy, sell, and hold gold easily, with full transparency and no hassle. Enjoy the stability of gold with the flexibility of digital assets.",
//     tag: "02",
//     buttonText: "Explore",
//     image: gif2,
//     bgColor: "#f0dafe",
//   },
//   {
//     id: 3,
//     title: "RICE AND GRAINS",
//     description:
//       "Invest in real-world assets like rice and whisky through blockchain-backed tokenization. Own a share in rice production for stable returns or invest in premium whisky barrels that gain value as they age. Secure, transparent, and easily tradeable, these assets offer a unique way to diversify your portfolio with long-term growth potential.",
//     tag: "03",
//     buttonText: "Learn more",
//     image: gif3,
//     bgColor: "#f1efee",
//   },
// ];

// const CardStack = () => {
//   const containerRef = useRef(null);
//   const cardRefs =  useRef<(HTMLDivElement | null)[]>([]);
//   const stackOffset = 40;


//   useLayoutEffect(() => {
//      gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: `+=1200`, // total scroll distance (adjust as needed)
//           scrub: true,
//           pin: true,
//         },
//       });

//       cards.forEach((_, i) => {
//         if (i === 0) return; // Skip first card, it's already visible

//         tl.fromTo(
//           cardRefs.current[i],
//           {
//             y: 800,
//             scale: 0.65,
//             opacity: 0,
//             pointerEvents: "none",
//           },
//           {
//             y: (i - 1) * stackOffset,
//             scale: 1,
//             opacity: 1,
//             pointerEvents: "auto",
//             ease: "power2.out",
//             duration: 1,
//           },
//           `+=0.5` // time offset between card reveals
//         );
//       });
//     }, containerRef);

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative  md:max-w-[700px] w-[300px] mx-auto mt-10"
//     >
//       {/* <h1 className="text-5xl font-bold mb-10 text-center">Card Stack</h1> */}
//       <div className="relative h-[600px]">
//         {cards.map((card, i) => {
//           const widthClass =
//             i === 1 ? "w-[750px]" : i === 2 ? "w-[800px]" : "w-[700px]";

//           return (
//             <div
//               key={card.id}
//               ref={(el) => {cardRefs.current[i] = el}}
//               className={`${widthClass} h-full text-black rounded-3xl shadow-xl px-10 py-7 flex flex-col items-center justify-center text-center absolute left-1/2 -translate-x-1/2`}
//               style={{
//                 top: `${i * stackOffset}px`,
//                 zIndex: i,
//                 backgroundColor: card.bgColor,
//               }}
//             >
//               <div className="text-xs font-semibold text-gray-600 mb-2">
//                 {card.tag}
//               </div>
//               <h1 className="text-4xl font-extrabold mb-4 ">{card.title}</h1>
//               <p className="text-sm font-vietnam text-gray-700 mb-6 max-w-[600px]">
//                 {card.description}
//               </p>
//               <button className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-200 flex items-center gap-2 mb-6">
//                 {card.buttonText}
//               </button>

//               {card.image && (
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full max-w-[350px] h-auto object-contain rounded-xl"
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CardStack;


import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import gif from "../assets/Shot_1.gif";
import gif2 from "../assets/svg-2.png";
import gif3 from "../assets/svg-3.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "REAL ESTATE",
    description:
      "Invest in tokenized real estate and earn passive income through fractional ownership. Secure, transparent, and backed by real assets, giving you exposure to high-yield properties without the management hassle.",
    tag: "01",
    buttonText: "Live now",
    image: gif,
    bgColor: "#d2e2fe",
  },
  {
    id: 2,
    title: "GOLD",
    description:
      "Invest in real gold through secure, blockchain-backed tokens. Buy, sell, and hold gold easily, with full transparency and no hassle. Enjoy the stability of gold with the flexibility of digital assets.",
    tag: "02",
    buttonText: "Explore",
    image: gif2,
    bgColor: "#f0dafe",
  },
  {
    id: 3,
    title: "RICE AND GRAINS",
    description:
      "Invest in real-world assets like rice and whisky through blockchain-backed tokenization. Own a share in rice production for stable returns or invest in premium whisky barrels that gain value as they age. Secure, transparent, and easily tradeable, these assets offer a unique way to diversify your portfolio with long-term growth potential.",
    tag: "03",
    buttonText: "Learn more",
    image: gif3,
    bgColor: "#f1efee",
  },
];

const CardStack = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const stackOffset = 40;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=1200`,
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((_, i) => {
        if (i === 0) return;
        tl.fromTo(
          cardRefs.current[i],
          {
            y: 800,
            scale: 0.65,
            opacity: 0,
            pointerEvents: "none",
          },
          {
            y: (i - 1) * stackOffset,
            scale: 1,
            opacity: 1,
            pointerEvents: "auto",
            ease: "power2.out",
            duration: 1,
          },
          `+=0.5`
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  // --- Desktop layout with stacking ---
  if (!isMobile) {
    return (
      <div
        ref={containerRef}
        className="relative md:max-w-[700px] w-[300px] mx-auto mt-10"
      >
        <div className="relative h-[600px]">
          {cards.map((card, i) => {
            const widthClass =
              i === 1 ? "w-[750px]" : i === 2 ? "w-[800px]" : "w-[700px]";
            return (
              <div
                key={card.id}
                ref={(el) => {cardRefs.current[i] = el}}
                className={`${widthClass} h-full text-black rounded-3xl shadow-xl px-10 py-7 flex flex-col items-center justify-center text-center absolute left-1/2 -translate-x-1/2`}
                style={{
                  top: `${i * stackOffset}px`,
                  zIndex: i,
                  backgroundColor: card.bgColor,
                }}
              >
                <div className="text-xs font-semibold text-gray-600 mb-2">
                  {card.tag}
                </div>
                <h1 className="text-4xl font-extrabold mb-4">{card.title}</h1>
                <p className="text-sm font-vietnam text-gray-700 mb-6 max-w-[600px]">
                  {card.description}
                </p>
                <button className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-200 flex items-center gap-2 mb-6">
                  {card.buttonText}
                </button>
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full max-w-[350px] h-auto object-contain rounded-xl"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- Mobile layout (no animation, vertical scroll) ---
  return (
    <div className="flex flex-col gap-10 px-6 mt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full rounded-3xl shadow-xl px-6 py-6 text-black text-center"
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="text-xs font-semibold text-gray-600 mb-2">
            {card.tag}
          </div>
          <h1 className="text-3xl font-extrabold mb-4">{card.title}</h1>
          <p className="text-sm font-vietnam text-gray-700 mb-6">
            {card.description}
          </p>
          <button className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-200 mb-6">
            {card.buttonText}
          </button>
          {card.image && (
            <img
              src={card.image}
              alt={card.title}
              className="w-full max-w-[300px] mx-auto h-auto object-contain rounded-xl"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardStack;
