import { useState } from "react";

const faq = [
  {
    question: "What is Tokenised ownership?",
    answer: `Tokenised ownership in real estate describes an investment process wherein a number of investors join
together to invest in a real estate asset so that all of them can benefit from a share of the income that the
asset generates and any appreciation in the value of the property.`,
  },
  {
    question: "What is Ryzer App?",
    answer: `Think of Ryzer like Binance, but for real-world assets. While it's different from crypto, it uses the same trusted
blockchain technology for transparency and security. Instead of crypto tokens,
Ryzer lets you invest in tokens that represent real assets. In simple terms, Ryzer.app is a tokenization platform that allows fractional ownership of top rental properties starting at just $500.`,
  },
  {
    question: "Is Ryzer regulated?",
    answer: `Ryzer is regulated under Qatar Digital Assets regulations and operates with full compliance to ensure 
transparency, security, and trust in all tokenized real estate investments.`,
  },
  {
    question: "How do I sign up for an account on Ryzer?",
    answer: `To sign up for Ryzer, you’ll need to provide personal information and documents like your passport and proof 
of address. This ensures compliance with KYC regulations under Qatar Digital Assets guidelines.`,
  },
  {
    question: "What is the minimum amount I can invest in Ryzer?",
    answer: `Invest in high-value rental properties across India with Ryzer starting from as low as $500 per property token.`,
  },
  {
    question: "How does Ryzer work?",
    answer: `Ryzer lets you invest in real-world assets like rental properties by owning tokens representing fractional 
ownership. You can invest from as low as $500`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index:number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open state
  };

  return (
    <div>

   
    <div className="flex justify-center">
      <div>
        {faq.map((data, index) => (
          <div
            key={index}
            onClick={() => toggleIndex(index)}
            className=" p-4 space-y-3 m-5 cursor-pointer w-4xl rounded-lg"
          >
            <div className="flex justify-between items-center ">
              <p className="text-xl font-vietnam ">{data.question}</p>
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>

            {openIndex === index && (
              <div className="font-vietnam whitespace-pre-line text-sm ">
                {data.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
    <div  className="flex justify-center">

    <button className="flex space-x-2  items-center border font-vietnam px-4 p-2 m-2 bg-black text-white rounded-2xl">
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
        </svg>
      </button>
            </div>
       </div>
  );
};

export default FAQ;
