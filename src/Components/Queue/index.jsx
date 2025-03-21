"use client";
import Image from "next/image";
import img from '../../Images/06.png'

export default function Queue() {
  

  return (
    <div className="p-6 bg-[#fafafa] md:w-[85%] mx-auto rounded-md ">
      <h2 className="text-2xl  text-center">Queue</h2>
      <p className="text-gray-600 text-center md:max-w-2xl mx-auto mb-4">
      Gain more investing control with a tool that lets you plan, edit, and execute multiple trades simultaneously, all with real-time price updates.
      </p>
      <div>
        <Image src={img} alt='' />
      </div>
    </div>
  );
}
