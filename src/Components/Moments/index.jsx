"use client";

import Image from "next/image";
import img from "../../Images/04.png";
import img1 from "../../Images/05.png";


export default function Features() {
  return (
    <section className="py-16 md:w-[90%] m-auto ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Five nerdy features you will love.
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          (Discover many more in the app.)
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:w-[95%] m-auto mt-12 ">
        {/* Key Moments */}
        <div className="bg-[#FAFAFA] rounded-2xl p-6 shadow-lg cursor-pointer  ">
          <h3 className="text-xl font-bold text-gray-900 text-center">Key Moments</h3>
          <p className="text-gray-500 mt-2 text-[14px] ">
            Discover the reasons behind every major stock price movement with 
            detailed, AI-generated summaries embedded right on the asset’s performance chart..
          </p>
          <a href="#" className="text-blue-500 mt-4 flex justify-center">
            Learn more →
          </a>
          <div className="mt-6">
            <div className="">
              <Image src={img} alt="img" />
            </div>
          </div>
        </div>

        {/* Income Hub */}
        <div className="bg-[#fafafa] rounded-2xl p-6 shadow-lg cursor-pointer ">
          <h3 className="text-xl font-bold text-gray-900 text-center ">Income Hub</h3>
          <p className="text-gray-500 mt-2">
          View a monthly breakdown of your earnings from every income-generating asset you own. Plus, see a forecast of your earnings for the year ahead .
          </p>
          <a href="#" className="text-blue-500 mt-4 flex justify-center">
            Learn more →
          </a>
          <div className="mt-6">
                         <Image src={img1} alt="img" />

          </div>
        </div>
      </div>
    </section>
  );
}
