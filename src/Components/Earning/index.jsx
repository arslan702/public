
import Image from "next/image";
import img from "../../Images/07.png";
import img1 from "../../Images/08.png";


export default function Earning() {
  return (
    <section className="py-16 md:w-[90%] m-auto  ">
    
      <div className="grid md:grid-cols-2 gap-8 md:w-[95%] m-auto mt-12 ">
        {/* Key Moments */}
        <div className="bg-[#FAFAFA] rounded-2xl p-6 shadow-lg cursor-pointer  ">
          <h3 className="text-xl font-bold text-gray-900 text-center">Earnings Hub</h3>
          <p className="text-gray-500 mt-2 text-[14px] text-center ">
          Access AI-generated earnings recaps, company KPIs, investor presentations, and the actual audio of the earnings call—all without leaving Public.
          </p>
          <a href="#" className="text-blue-500 mt-4 flex justify-center ">
            Learn more →
          </a>
          <div className="mt-6">
            <div className="w-full max-w-lg mx-auto">
              <Image src={img} alt="img" className="w-full" />
            </div>
          </div>
        </div>

        {/* Income Hub */}
        <div className="bg-[#fafafa] rounded-2xl p-6 shadow-lg cursor-pointer ">
          <h3 className="text-xl font-bold text-gray-900 text-center ">Investment Plans          </h3>
          <p className="text-gray-500 mt-2 text-center text-[14px] ">
          Schedule recurring investments into personalized Investment Plans with up to 20 stocks, ETFs, and cryptos, and grow your portfolio automatically.          </p>
          <a href="#" className="text-blue-500 mt-4 flex justify-center ">
            Learn more →
          </a>
          <div className="mt-6">
                         <Image src={img1} alt="img" />

          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-6 my-5">
      {/* Icon */}
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <span className="text-green-500 text-2xl">⚡</span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl  ">
        And up to <span className="text-black">$250,000</span>
      </h2>
      <h2 className="text-2xl text-gray-400">in instant buying power</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mt-2">
        Take advantage of every investment opportunity by making moves without waiting for funds to settle.
      </p>

      {/* Disclaimer */}
      <p className="text-sm text-gray-400 mt-2">Varies by account.</p>
    </div>

    </section>
  );
}
