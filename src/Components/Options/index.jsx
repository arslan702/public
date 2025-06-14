"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import img from '../../Images/02.png'
import img1 from '../../Images/11.png'

export default function OptionsTrading() {
  const [rebate, setRebate] = useState(-0.15);

  useEffect(() => {
    const interval = setInterval(() => {
      setRebate((prev) => (prev > -0.18 ? prev - 0.01 : -0.18));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-[90%] m-auto flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-white text-black">
      <div className="md:w-[45%] text-left space-y-4">
        <h2 className="text-blue-600 text-lg font-medium">Options Trading</h2>
        <h1 className="md:text-4xl text-2xl ">Trade options.</h1>
        <h1 className="md:text-4xl text-2xl  ">Earn rebates.</h1>
        <p className="text-gray-600 max-w-md">
          Public is the only investing platform with options trading rebates. Earn $0.06–$0.18 per stock or ETF contract, based on your monthly trading volume.
        </p>
        {/* <button className="mt-4 px-4 py-2 border rounded-lg border-gray-400 text-gray-600 hover:bg-gray-200 transition">
          ⓘ Options Disclosures
        </button> */}
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md mt-4 md:w-[70%] ">
          <Image src={img1} alt="NerdWallet Logo" className="w-16 h-16 rounded-lg" />
          <p className="ml-4 text-gray-700 text-sm max-w-sm">
            “The cost of options trades at Public isn’t just standard regulatory fees, or even zero — it’s negative.”
          </p>
        </div>
      </div>
      <div className="md:w-[55%] flex items-center justify-center mt-10 md:mt-0 relative">
        <div className="relative w-full">
          <Image src={img} alt="Trading Costs Chart" className="rounded-lg shadow-lg" />
         
        </div>
      </div>
    </div>
  );
}
