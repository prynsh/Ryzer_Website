// import logo from "../assets/Ryzer.png";
// import AnimatedButton from "./HoverButton";

// type TopbarProps = {
//   isDarkBg: boolean;
// };

// const Topbar = ({ isDarkBg }: TopbarProps) => {
//   return (
//     <div className="px-10 p-5 items-center flex justify-between fixed top-0 left-0 right-0 z-50">
//       <div className="flex space-x-1 items-center">
//         <img src={logo} height={50} width={50} alt="Ryzer logo" />
//      <div className="italic">
//   <h1
//     className={`text-2xl font-bold transition-colors duration-300 ${
//       isDarkBg ? "text-white" : "text-black"
//     }`}
//   >
//     Ryzer
//   </h1>
//   <h1 className={`text-[7px] font- transition-colors duration-300 ${
//       isDarkBg ? "text-white" : "text-black"
//     }`}>
//     Powered by{" "}
//     <span className={`${isDarkBg ? "text-white" : "text-blue-400"}`}>
//       My Cow.io
//     </span>
//   </h1>
// </div>

//       </div>
//       <div className="flex justify-around space-x-2 items-center">
//         <button
//           className={`border p-2 rounded-full ${
//             isDarkBg ? "bg-white" : "bg-[#434242]"
//           } hover:cursor-pointer transition-colors duration-300`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke={isDarkBg ? "black" : "white"} // <-- dynamic stroke color
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="icon icon-tabler icon-tabler-brand-x"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
//             <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
//           </svg>
//         </button>

//         <button
//           className={`border p-2 rounded-full ${
//             isDarkBg ? "bg-white" : "bg-[#434242]"
//           } hover:cursor-pointer transition-colors duration-300`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke={isDarkBg ? "black" : "white"} // <-- dynamic stroke color
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="icon icon-tabler icon-tabler-brand-linkedin"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <path d="M8 11v5" />
//             <path d="M8 8v.01" />
//             <path d="M12 16v-5" />
//             <path d="M16 16v-3a2 2 0 1 0 -4 0" />
//             <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
//           </svg>
//         </button>

//         <AnimatedButton isDarkBg={isDarkBg}>Join Waitlist</AnimatedButton>
//       </div>
//     </div>
//   );
// };

// export default Topbar;



import logo from "../assets/Ryzer.png";
import AnimatedButton from "./AnimatedButton";

type TopbarProps = {
  isDarkBg: boolean;
};

const Topbar = ({ isDarkBg }: TopbarProps) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 ">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img src={logo} alt="Ryzer logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        <div className="italic leading-tight">
          <h1
            className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${
              isDarkBg ? "text-white" : "text-black"
            }`}
          >
            Ryzer
          </h1>
          <h1
            className={`text-[6px] sm:text-[8px] transition-colors duration-300 ${
              isDarkBg ? "text-white" : "text-black"
            }`}
          >
            Powered by{" "}
            <span className={isDarkBg ? "text-white" : "text-blue-400"}>
              My Cow.io
            </span>
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
        {/* X Button */}
        <button
          className={`border p-1 sm:p-2 rounded-full ${
            isDarkBg ? "bg-white" : "bg-[#434242]"
          } hover:cursor-pointer transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDarkBg ? "black" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </button>

        {/* LinkedIn Button */}
        <button
          className={`border p-1 sm:p-2 rounded-full ${
            isDarkBg ? "bg-white" : "bg-[#434242]"
          } hover:cursor-pointer transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDarkBg ? "black" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-linkedin"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 11v5" />
            <path d="M8 8v.01" />
            <path d="M12 16v-5" />
            <path d="M16 16v-3a2 2 0 1 0 -4 0" />
            <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
          </svg>
        </button>

        {/* Animated Button */}
        <div className="sm:block">
          <AnimatedButton isDarkBg={isDarkBg}>Join Waitlist</AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
