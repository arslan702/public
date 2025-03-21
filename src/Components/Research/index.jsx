import Image from 'next/image'
import React from 'react'
import img from '../../Images/09.png'

export default function Research() {
  return (
    <div className=" bg-[#FAFAFA] flex flex-col lg:flex-row items-center justify-between p-8 md:w-[90%] mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 text-left">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-black text-green-400 px-2 py-1 rounded text-sm font-bold">α</span>
          <span className="text-lg font-semibold">alpha</span>
        </div>

        {/* Heading */}
        <h2 className="text-[#62778C] text-3xl ">AI for investors</h2>
        <h1 className="md:text-4xl text-2xl leading-tight mt-2">
          Investment research and <br /> proactive insights
        </h1>

        {/* Bullet Points */}
        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-600 p-1 rounded">💡</span>
            <span>Ask any question about any stock.</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-600 p-1 rounded">📈</span>
            <span>Receive earnings call breakdowns the minute they hang up.</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-600 p-1 rounded">❤️</span>
            <span>Know why a stock is moving—not just that it is.</span>
          </p>
        </div>

        {/* Disclaimer Link */}
        <p className="text-gray-500 text-sm mt-4 cursor-pointer hover:underline">
          ⓘ Alpha Disclosures
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <div className=" w-full max-w-lg mx-auto">
          <Image src={img} alt='img' />
        </div>
      </div>
    </div>
  )
}
