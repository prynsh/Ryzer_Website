const featuresData = [
  {
    title: "BROWSE ASSETS",
    description:
      "Search and invest in our highly curated selection of long term rental properties.",
  },
  {
    title: "EARN RENTAL INCOME",
    description:
      "Sit back and earn consistent rental income from high rental assets.",
  },
  {
    title: "SELL, SWAP & STAKE",
    description:
      "Instantly trade, stake tokens, and boost APY—exit whenever needed.",
  },
];

const Features = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap bg-white p-6 ">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="flex-1 min-w-[280px] text-left max-w-sm bg-[#f9f9f9] rounded-2xl p-10 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
          >
            <path
              d="M0.542737 14.9849C-0.0461222 14.1186 -0.163833 13.0156 0.22896 12.0445C1.10682 10.2537 2.57739 8.82197 4.39104 7.9924C5.70414 7.33941 7.12648 6.93443 8.58654 6.79767C7.95035 7.58052 7.31345 8.41577 6.67584 9.30358C5.37818 11.2686 4.26739 13.3508 3.35805 15.523L2.96663 16.4007C1.98614 16.3196 1.09503 15.7991 0.542737 14.9849ZM2.03398 19.5395C1.09717 20.8331 0.424772 22.2987 0.0553896 23.8526C-0.174903 24.8622 0.456866 25.8674 1.46655 26.0977C1.74133 26.1604 2.02667 26.1603 2.30144 26.0975C3.85291 25.7275 5.31628 25.0556 6.60805 24.12C7.87291 22.8557 7.87342 20.8054 6.60912 19.5406C5.34487 18.2757 3.29457 18.2752 2.02971 19.5395H2.03398ZM10.5921 22.7527L9.70799 23.1452V23.4623C9.71012 24.2217 10.0143 24.9491 10.5533 25.484C11.0661 25.9827 11.7531 26.262 12.4684 26.2625C15.0098 26.2259 17.0704 23.9119 18.1519 21.7576C18.8144 20.4243 19.2208 18.9785 19.3498 17.4952C18.5591 18.1422 17.7112 18.7891 16.8062 19.4361C14.8419 20.7341 12.76 21.8445 10.5878 22.7528L10.5921 22.7527ZM25.8819 3.45291C25.7385 8.14658 22.3592 12.8014 15.55 17.686C13.697 18.8872 11.7422 19.9234 9.70799 20.7828V20.1757C9.69794 18.0956 8.01418 16.4118 5.93408 16.4018H5.32704C6.18839 14.3676 7.22641 12.4128 8.42922 10.5598C13.3018 3.76669 17.9491 0.383086 22.6353 0.22998C24.9708 0.22998 25.8819 1.18101 25.8819 3.45291ZM19.4123 9.39305C19.4123 7.9043 18.2055 6.69738 16.7167 6.69738C15.2279 6.69738 14.021 7.90425 14.021 9.39305C14.021 10.8818 15.2279 12.0887 16.7167 12.0887C18.2055 12.0887 19.4123 10.8818 19.4123 9.39305Z"
              fill="black"
            ></path>
          </svg>
          <h3 className="text-xl font-extrabold text-[#0f0f1f] mb-2 font-phudu">
            {feature.title}
          </h3>
          <p className="text-[#4b4b4b] text-md font-semibold leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
