// 
import qfc from "../assets/QFC-min.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around m-7 space-y-10">
        
        {/* Logo Section */}
        <div className="content-start">
          <div className="pr-10">
            <img height={150} width={150} src={qfc} />
          </div>
          <div className="text-left">
            Regulated by QFC digital assets <br /> regulatory framework
          </div>
        </div>

        {/* Links + Company side by side always */}
        <div className="flex justify-around gap-10 w-full md:w-auto">
          {/* Links */}
          <div>
            <div className="space-y-10 cursor-pointer">
              <div>
                <div className="border rounded-full border-slate-100 font-semibold">Links</div>
              </div>
              <div>
                <div className="space-y-3 text-gray-400">
                  <div className="hover:text-black">Terms of Use</div>
                  <div className="hover:text-black">Privacy Policy</div>
                  <div className="hover:text-black">Risk Disclosure</div>
                  <div className="hover:text-black">Refund Policy</div>
                  <div className="hover:text-black">Legal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="space-y-10 cursor-pointer">
              <div>
                <div className="border border-slate-100 font-semibold">Company</div>
              </div>
              <div>
                <div className="space-y-3 text-gray-400">
                  <div className="hover:text-black">About us</div>
                  <div className="hover:text-black">Press & Media</div>
                  <div className="hover:text-black">Partner with us</div>
                  <div className="hover:text-black">List your asset</div>
                  <div className="hover:text-black">Contact us</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Waitlist */}
        <div className="space-y-10 text-left">
          <h1 className="text-2xl">Join Waitlist</h1>
          <p className="text-gray-400 font-normal">
            Join Waitlist and unlock the <br />
            full potential of your savings
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-sm pt-20 p-5 text-gray-400">
        This site is operated by Ryzer Wealth Corp Pvt.Ltd., which is not a registered broker-dealer or investment advisor. 
        Ryzer does not give investment advice, endorsement, analysis or <span className="hidden lg:inline">
              <br />
            </span>recommendations with respect to any investments,
        or securities. Offers to sell, or the solicitations of offers to buy, any security can only be made through official offering
        <span className="hidden lg:inline">
              <br />
            </span> documents. Investors should conduct their own due diligence, not rely on the financial assumptions or estimates displayed
        on this website/app, and are encouraged to <span className="hidden lg:inline">
              <br />
            </span> a financial advisor attorney or any other professional that can help understand
        and assess the risks associated with any investment opportunity. Ryzer does not <span className="hidden lg:inline">
              <br />
            </span> investment performance, outcome or return
        of capital for any investment opportunity posted on this site.
      </p>
    </div>
  );
};

export default Footer;
