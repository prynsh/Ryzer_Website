interface Feature{
    title:string,
    subtitle:string
}

const FeatureCard = ({ title, subtitle }:Feature) => (
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

