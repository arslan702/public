import React from "react";
import Image from "next/image";
import img from "../../Images/16.webp"; // Ensure correct path

export default function FundAccountSection() {
  return (
    <div className="relative pt-6 bg-black text-white flex flex-col items-center justify-start md:h-[720px] overflow-hidden">
      {/* Text Content */}
      <h2 className="text-3xl md:text-4xl text-center mt-10 font-serif ">
        Fund your account in
      </h2>
      <h3 className="text-2xl md:text-3xl font-serif text-[#7C3AED] mt-2 text-center">
        5 minutes or less
      </h3>

      {/* Sign-Up Button */}
      {/* <button
        className="mt-6 px-14 py-3 text-lg text-white rounded-full shadow-xl 
                        bg-gradient-to-b from-[#0050ff] to-[#002db3] 
                        hover:from-[#003fcc] hover:to-[#001f80] 
                        transition duration-300 
                        relative before:absolute before:inset-0 before:rounded-full 
                        before:shadow-[0px_0px_20px_2px_rgba(0,80,255,0.6)]"
      >
        Sign up
      </button> */}

      {/* Image Section */}
      <div className="relative flex justify-center w-full mt-20">
        {/* Pedestal Effect */}
        <div className="absolute bottom-[-30px] w-[50%] h-[60px]  rounded-2xl blur-[50px] opacity-40"></div>

        <div className="relative max-w-4xl w-full px-4 flex justify-center">
          <Image
            src={img}
            alt="Fund Account UI"
            className="w-auto max-w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
