"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../Images/01.png";

export default function BondAccount() {
  const [rate, setRate] = useState(6.76);

  useEffect(() => {
    const interval = setInterval(() => {
      setRate((prev) => (prev < 7 ? prev + 0.01 : 7));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-[90%] m-auto flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-white text-black">
      <div className="md:w-[45%] text-left space-y-4">
        <h2 className="text-blue-600 text-lg font-medium">Bond Account</h2>
        <h1 className="text-5xl font-bold">7% yield.*</h1>
        <h1 className="text-5xl font-bold">Locked in.</h1>
        <p className="text-gray-600 max-w-md">
          Now, you can lock in a 7% yield that won’t change if the Fed cuts rates with a
          diversified portfolio of investment-grade and high-yield bonds.
        </p>
        {/* <button className="mt-4 px-4 py-2 border rounded-lg border-gray-400 text-gray-600 hover:bg-gray-200 transition">
          ⓘ Bond Account Disclosure
        </button> */}
      </div>
      <div className="md:w-[55%] flex items-center justify-center mt-10 md:mt-0 ">
        <div className="  ">
          <Image src={img} alt="Bond Account Chart" className="rounded-lg w-lg shadow-lg" />
         
        </div>
      </div>
    </div>
  );
}
