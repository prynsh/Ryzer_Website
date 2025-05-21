import React from 'react';
import rippleLogo from '../assets/Ripple-min.png';
import xdcLogo from '../assets/XDC-min-1.png';
import mycowLogo from '../assets/MyCow-IO-Main-Logo-Horizontal.png';
import chainlinkLogo from '../assets/Chainlink-min.png';
import polygonLogo from '../assets/Polygon-min.png';
import qfcLogo from '../assets/QFC-min.png';

const data = [
  { image: rippleLogo, },
  { image: xdcLogo, },
  { image: mycowLogo, },
  { image: chainlinkLogo, },
  { image: polygonLogo, },
  { image: qfcLogo, }
];

const Backed = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-2 ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-2 border-r  border-gray-400 last:border-r-0">
            <img src={item.image} className="w-40 h-10 mb-1 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backed;
