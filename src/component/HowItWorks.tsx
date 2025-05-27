// const data = [
//   {
//     id: "1",
//     title: "Buy just $100",
//     description: "Invest in vetted opportunities with full due diligence",
//   },
//   {
//     id: "2",
//     title: "Earn",
//     description: "Earn passive income with hassle-free monthly rental payouts.",
//   },
//   {
//     id: "3",
//     title: "Trade",
//     description: "Trade tokens easily with our P2P secondary trading platform",
//   },
//   {
//     id: "4",
//     title: "Stake",
//     description: "Boost extra APY by staking asset-backed tokens",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <div className="space-y-20 px-6 md:px-20">
//       <div>
//         <h1 className="text-6xl font-bold text-neutral-800 text-center">
//           How it Works?
//         </h1>
//       </div>
//       <div className="flex flex-wrap justify-center gap-10">
//         {data.map((feat, index) => (
//           <div
//             key={index}
//             className="w-70 h-56 p-6 flex flex-col justify-between rounded-xl"
//           >
//             <div className="text-md font-bold text-primary">{feat.id}</div>

//             <div className="flex-grow" />

//             <div>
//               <h3 className="text-2xl font-phudu  mb-2">{feat.title}</h3>
//               <p className="text-muted-foreground font-vietnam text-sm">
//                 {feat.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;




import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: "1",
    title: "Buy just $100",
    description: "Invest in vetted opportunities with full due diligence",
  },
  {
    id: "2",
    title: "Earn",
    description:
      "Earn passive income with hassle-free monthly rental payouts.",
  },
  {
    id: "3",
    title: "Trade",
    description: "Trade tokens easily with our P2P secondary trading platform",
  },
  {
    id: "4",
    title: "Stake",
    description: "Boost extra APY by staking asset-backed tokens",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-20 px-6 md:px-20">
      <div>
        <h1 className="text-6xl font-bold text-neutral-800 text-center">
          How it Works?
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((feat, index) => (
          <div
            key={index}
            className="how-card w-70 h-56 p-6 flex flex-col justify-between rounded-xl bg-white shadow-md"
          >
            <div className="text-md font-bold text-primary">{feat.id}</div>
            <div className="flex-grow" />
            <div>
              <h3 className="text-2xl font-phudu mb-2">{feat.title}</h3>
              <p className="text-muted-foreground font-vietnam text-sm">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
