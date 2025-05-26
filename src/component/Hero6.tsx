
import Footer from "./Footer";

const Hero6 = () => {
  return (
    <div className="">
      <div className="text-center relative w-full h-[400px]">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.ryzer.app/wp-content/uploads/2024/09/BG-6.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="relative z-10 pt-5 space-y-10">
          <p className="bg-gradient-to-r from-[#70B4AF] to-[#5F53EB] text-transparent bg-clip-text font-vietnam">
            Designed to be your co-pilot for passive income & long term capital
            gains
          </p>

          {/* h1 text stays above the background image */}
          <h1 className="h1 text-7xl font-bold text-gray-800 ">
            Join the future of <br /> real world assets
          </h1>
          <p className="font-vietnam">
            Download Ryzer.app today and unlock the full potential of <br />{" "}
            Premium & exclusive Assets
          </p>
          <div className="flex justify-center">
            <button className="border border-white text-white bg-black flex items-center px-6 py-2 gap-2 whitespace-nowrap rounded-2xl">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
              </svg>
              <span className="text-sm">Join Waitlist</span>
            </button>
          </div>
          <div className="flex justify-around  p-10 m-20">
            <div className=" font-phudu text-xl ">
                Stay Connected 
            </div>
            <div>
                <svg aria-hidden="true" fill="currentColor" className="w-6 h-6 text-[#4A6C7A]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </div>
            <div>
               <svg aria-hidden="true" fill="currentColor" className="w-6 h-6 text-[#4A6C7A]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg> 
            </div>
            <div>
                <svg aria-hidden="true" fill="currentColor" className="w-6 h-6 text-[#4A6C7A]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </div>
            <div>
                <svg aria-hidden="true" fill="currentColor" className="w-6 h-6 text-[#4A6C7A]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </div>
            <div className="font-vietnam">
                Follow us and Stay Connected 
            </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
