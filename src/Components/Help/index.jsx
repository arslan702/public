import React from "react";
import Image from "next/image";

// Importing images correctly
import img from "../../Images/10.png";
import img1 from "../../Images/13.svg";
import img2 from "../../Images/14.svg";
import img3 from "../../Images/15.svg";

export default function SupportSection() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold">We’re here to help.</h1>
          <h2 className="text-4xl text-gray-400 mt-1">
            <span className="text-gray-300 font-light">Not </span> upsell.
          </h2>

          <div className="flex gap-6 mt-6">
            {/* Icons */}
            <div className="flex flex-col items-center">
              <Image src={img1} alt="US-Based Support" width={40} height={40} />
              <p className="text-xs mt-2">US-BASED</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={img2} alt="Registered" width={40} height={40} />
              <p className="text-xs mt-2">REGISTERED</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={img3} alt="Actually Cares" width={40} height={40} />
              <p className="text-xs mt-2">ACTUALLY CARES</p>
            </div>
          </div>

          <p className="text-gray-500 text-lg mt-6">
            Our <span className="font-bold">award-winning</span> customer
            support team of financial representatives is here to help you with
            everything from transferring a portfolio to understanding your
            account features.
          </p>
        </div>

        {/* Right Section - Image & Chat Bubbles */}
        <div className="relative">
          <Image
            src={img}
            alt="Customer Support Representative"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}
