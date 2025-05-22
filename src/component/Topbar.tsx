
import logo from "../assets/Ryzer.png";
import AnimatedButton from "./HoverButton";
const Topbar = () => {
  return (
    <div className="bg-white px-10 p-5 items-center flex justify-between fixed top-0 left-0 right-0 z-50 ">
      <div className="flex space-x-1 items-center text-black">
        <div>
        <img src={logo} height={50} width={50}></img>
        </div>
        <div className="italic">
        <h1 className="text-2xl font-bold ">Ryzer</h1>
        <h1 className="text-[7px] font-semibold">Powered by <span className="text-blue-400">My Cow.io</span></h1>
        </div>
      </div>
      <div className="flex justify-around space-x-2 items-center">
        <button className="border p-2 rounded-full bg-[#434242] hover:cursor-pointer "><svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></button>
        <button className="border p-2 rounded-full bg-[#434242] hover:cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg></button>

        <AnimatedButton>Join Waitlist</AnimatedButton>

      </div>
    </div>
  );
};

export default Topbar;
