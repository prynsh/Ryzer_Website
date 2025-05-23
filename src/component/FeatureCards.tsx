// import React from 'react'

// const data=[
//     {id:"01",
//      title:"Try",
//      description:"Affordable entry into real estate with just $500 investment"
//     },
//     {
//         id:'02',
//         title:"Track",
//         description:'Stay updated on asset performance real time'
//     },
//     {
//         id:"03",
//         title:"Trade",
//         description:"Instant liquidity with seamless buying and selling of tokens."
//     }

// ]



// const FeatureCards = () => {
//   return (
//     <div>
//       <div className='flex justify-around space-x-10 m-20'>
//         {data.map((data,index)=>(
//             <div className='w-1/3 min-h-96  text-left p-10 font-bold text-xl rounded-4xl flex-col space-y-3 bg-[#1b1a1a]' key={index}>
//                 <div>
//                     {data.id}
//                 </div>
//                 <div className='font-phudu'>
//                     {data.title}
//                 </div>
//                 <div>{data.description}</div>
//             </div>
//         ))}

//       </div>
//     </div>
//   )
// }

// export default FeatureCards


import React from 'react';

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
  return (
    <div className='flex justify-around space-x-10 mx-60 my-10'>
  {data.map((item, index) => (
    <div
      key={index}
      className='w-1/3 min-h-96 bg-[#1b1a1a] text-white p-10 rounded-3xl flex flex-col text-left justify-between'
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
