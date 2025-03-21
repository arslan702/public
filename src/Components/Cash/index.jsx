"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "../../Images/03.png";

export default function HighYieldCashAccount() {
  const [apy, setApy] = useState(4.1);

  useEffect(() => {
    const interval = setInterval(() => {
      setApy((prev) => (prev < 4.15 ? prev + 0.01 : 4.1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-[90%] md:m-auto flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-white text-black">
      <div className="md:w-[45%] text-left space-y-4">
        <h2 className="text-blue-600 text-lg font-medium">High-Yield Cash Account</h2>
        <h1 className="text-3xl ">Earn 4.1% APY* <br /> on your cash </h1>
        <p className="text-gray-600 max-w-sm text-[14px] ">
          Our High-Yield Cash Account offers an industry-leading 4.1% APY with no fees or balance requirements. Plus, you get up to $5M FDIC insurance.
        </p>
        <button className="mt-4 px-4 py-2 border rounded-lg border-gray-200 text-[14px] text-gray-600 hover:bg-gray-200 transition">
          ⓘ High-Yield Cash Account Disclosure
        </button>
      </div>
      <div className="md:w-[55%] flex items-center justify-center mt-10 md:mt-0 relative">
        <div className="relative w-full">
          <Image src={Img} alt="High-Yield Cash Account" className="rounded-lg shadow-lg" />
          
        </div>
      </div>
    </div>
  );
}

