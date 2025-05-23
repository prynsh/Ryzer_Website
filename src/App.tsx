// App.tsx
import './App.css'
import { useEffect, useRef, useState } from "react";
import Hero from './component/Hero';
import Hero2 from './component/Hero2';
import Hero3 from './component/Hero3';
import Topbar from './component/Topbar';

function App() {
  const [isDarkBg, setIsDarkBg] = useState(false);
  const hero2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === true when Hero2 crosses into view
        setIsDarkBg(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        // push intersection trigger down by Topbar height (e.g. 80px)
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    if (hero2Ref.current) observer.observe(hero2Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Topbar isDarkBg={isDarkBg} />

      <div className="min-h-screen space-y-10 pt-24">
        <Hero />

        <div ref={hero2Ref} className="min-h-screen">
          <Hero2 />
        </div>

        <Hero3 />
      </div>
    </>
  );
}

export default App;
