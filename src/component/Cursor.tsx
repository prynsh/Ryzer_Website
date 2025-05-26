import gsap from 'gsap';
import { useEffect, useRef } from 'react'

const Cursor = () => {
  const circle = useRef<HTMLDivElement>(null);
  const size = 30;
  const mouse = useRef({ x: 0, y: 0 });

  const delayedMouse = useRef({
    x:0,
    y:0
  })

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = { x: clientX, y: clientY };
};
const lerp = (x:number,y:number,a:number)=> x*(1-a)+y*a;

const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y });
};

const animate =()=>{
    const {x,y}= delayedMouse.current;

    delayedMouse.current={
        x:lerp(x,mouse.current.x,0.3),
        y:lerp(y,mouse.current.y,0.3)
    }
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate)
  }

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <div
      ref={circle}
      className="fixed top-0 left-0 bg-[#161717]  rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference dark:bg-white"
      style={{
        width: size,
        height: size
      }}
    ></div>
  );
};

export default Cursor;
