import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: "01",
    title: "Try",
    description: "Affordable entry into real estate with just $500 investment"
  },
  {
    id: "02",
    title: "Track",
    description: "Stay updated on asset performance real time"
  },
  {
    id: "03",
    title: "Trade",
    description: "Instant liquidity with seamless buying and selling of tokens."
  }
];

const FeatureCards = () => {
    const featureContainer = useRef(null)

    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const items = gsap.utils.toArray('.feature-cards');

            gsap.from(items,{
                scrollTrigger:{
                    trigger:featureContainer.current,
                    start:'top 80%',
                    toggleActions:"play reverse play reverse"
                },
                y:50,
                opacity:0,
                duration:1,
                stagger:0.2,
                ease:"back.inOut(1.7)"
            });
        },featureContainer)
        return ()=>ctx.revert();
    },[])
  return (
    <div ref={featureContainer} className='flex justify-around space-x-10 mx-60 my-10'>
  {data.map((item, index) => (
    <div
      key={index}
      className='feature-cards w-1/3 min-h-96 bg-[#1b1a1a] text-white p-10 rounded-3xl flex flex-col text-left justify-between'
    >
      {/* Top Section: ID and Title */}
      <div>
        <div className='text-xl font-bold'>{item.id}</div>
        <div className='text-xl font-bold font-phudu mt-2'>{item.title}</div>
      </div>

      {/* Bottom Section: Description */}
      <div className='text-md text-neutral-400 font-semibold leading-relaxed mt-4'>
        {item.description}
      </div>
    </div>
  ))}
</div>

  );
};

export default FeatureCards;
