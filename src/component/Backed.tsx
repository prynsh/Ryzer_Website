import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rippleLogo from '../assets/Ripple-min.png';
import xdcLogo from '../assets/XDC-min-1.png';
import mycowLogo from '../assets/MyCow-IO-Main-Logo-Horizontal.png';
import chainlinkLogo from '../assets/Chainlink-min.png';
import polygonLogo from '../assets/Polygon-min.png';
import qfcLogo from '../assets/QFC-min.png';

gsap.registerPlugin(ScrollTrigger);

const data = [
  { image: rippleLogo },
  { image: xdcLogo },
  { image: mycowLogo },
  { image: chainlinkLogo },
  { image: polygonLogo },
  { image: qfcLogo },
];

const Backed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.logo-item');

      gsap.from(items, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions:  'play reverse play reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex flex-wrap justify-center items-center gap-2 py-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="logo-item flex flex-col items-center px-2 border-r border-gray-200 last:border-r-0"
          >
            <img
              src={item.image}
              className="md:w-40 w-44 h-10 mb-1 object-contain"
              alt={`logo-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backed;
