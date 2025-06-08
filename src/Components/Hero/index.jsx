import React from 'react'

export default function Hero() {
  return (
    <div>
       <section className="px-6 py-10 lg:px-20  bg-white flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
          Investing for those who take it seriously
        </h1>
        <div className="mt-6 flex flex-wrap items-center space-x-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">💰</span>
            <span>Multi-asset investing</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">📈</span>
            <span>Industry-leading yields</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">💙</span>
            <span>Trusted by millions</span>
          </div>
        </div>
      </div>
      
      {/* Right Content - CTA Button */}
      <div className="mt-10 lg:mt-0">
        <button className="flex items-center space-x-2 px-6 py-3 text-white bg-blue-600 rounded-full text-lg font-medium shadow-md hover:bg-blue-700">
          <span>Get Started</span>
          <span>↗</span>
        </button>
      </div>
    </section>
    
    <video 
        className="w-full h-full  object-cover p-3 rounded-3xl "
        autoPlay
        loop
        muted
        playsInline
        
      >
        <source src="/video/4.mp4" type="video/mp4" />
      </video>
      <section className="text-center py-16 px-6 bg-white">
      <div className="flex justify-center space-x-1 text-green-500 text-xl">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <blockquote className="mt-4 text-2xl font-semibold text-black max-w-3xl mx-auto">
        Public earns high marks for ease-of-use <br /> and investment selection.
      </blockquote>
      <div className="mt-6 flex justify-center">
        <div className="px-4 py-2 border rounded-lg flex items-center space-x-2 border-gray-300">
          <span className="text-green-600 font-semibold">Nerdwallet</span>
        </div>
      </div>
      <p className="mt-4 text-gray-500 text-sm">
        See <a href="https://www.publictrade.net/disclosures" className="text-blue-600 underline">publictrade.net/disclosures</a> for more info.
      </p>
    </section>
    </div>
  )
}
