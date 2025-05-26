

// const features = [
//   {
//     title: "Regulated Sandbox",
//     subtitle: "For users worldwide",
//     className: "col-span-2",
//   },
//   {
//     title: "Secured",
//     subtitle: "Yield Distribution",
//   },
//   {
//     title: "Instant Liquidity",
//     subtitle: "No Lockups Attached",
//   },
//   {
//     title: "Swap & Stake",
//     subtitle: "Your asset backed tokens",
//   },
//   {
//     title: "Starts with",
//     subtitle: "Just 100$",
//   },
//   {
//     title: "Professional",
//     subtitle: "Management",
//   },
// ];

// const BentoGrid = () => {
//  return (
//     <div className="grid grid-cols-4 gap-2 p-6 bg-black text-left text-white px-90">
//       {/* First row */}
//       <div className="col-span-3 bg-neutral-900 rounded-xl p-10 flex flex-col justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">Regulated Sandbox</h3>
//           <p className="text-sm text-blue-400">For users worldwide</p>
//         </div>
//         {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center">+</button> */}
//       </div>

//       <div className="bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">Secured</h3>
//           <p className="text-sm text-teal-400">Yield Distribution</p>
//         </div>
//         {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center">+</button> */}
//       </div>

//       {/* Second row */}
//       <div className="row-span-2 bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">Instant Liquidity</h3>
//           <p className="text-sm text-blue-400">No Lockups Attached</p>
//         </div>
//         {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center">+</button> */}
//       </div>

//       <div className="col-span-2 grid grid-rows-2 gap-2">
//         <div className="bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="text-lg font-semibold">Swap & Stake</h3>
//             <p className="text-sm text-teal-400">Your asset backed tokens</p>
//           </div>
//           {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center">+</button> */}
//         </div>

//         <div className="bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="text-lg font-semibold">Starts with</h3>
//             <p className="text-sm text-blue-400">Just 100$</p>
//           </div>
//           {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center">+</button> */}
//         </div>
//       </div>

//       <div className="row-span-2 bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">Professional</h3>
//           <p className="text-sm text-blue-400">Management</p>
//         </div>
//         {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center">+</button> */}
//       </div>
//     </div>
//   );
// };

// export default BentoGrid;


const FeatureCard = ({ title, subtitle }) => (
  <div className="bg-neutral-900 rounded-xl p-6 text-left  border border-neutral-800 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-blue-400">{subtitle}</p>
    </div>
    {/* <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center mt-4">
      +
    </button> */}
  </div>
);

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 p-6 px-40 text-white h-[80vh]">
      {/* Row 1 */}
      <div className="col-span-2">
        <FeatureCard title="Regulated Sandbox" subtitle="For users worldwide" />
      </div>
      <FeatureCard title="Secured" subtitle="Yield Distribution" />

      {/* Row 2 */}
      <div className="row-span-2">
        <FeatureCard title="Instant Liquidity" subtitle="No Lockups Attached" />
      </div>
      <FeatureCard title="Swap & Stake" subtitle="Your asset backed tokens" />
      <div className="row-span-2">
        <FeatureCard title="Professional" subtitle="Management" />
      </div>

      {/* Row 3 (center only) */}
      <FeatureCard title="Starts with" subtitle="Just 100$" />
    </div>
  );
};

export default BentoGrid;

