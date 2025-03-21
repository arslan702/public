import Image from 'next/image';
import React from 'react';
import img from '../../Images/12.png';

export default function Security() {
  return (
    <div className="relative w-full min-h-screen bg-black py-12 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={img} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-80"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-white text-center py-4 px-6">
        {/* Hero Section */}
        <h1 className="text-5xl font-semibold">
          Secure by <span className="text-gray-300">design.</span>
        </h1>
        <h2 className="text-3xl text-blue-400 mt-2">
          Transparent by choice.
        </h2>
      </div>

      {/* Info Grid with Dark Background */}
      <div className="relative z-10 mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 ">
        {[
          {
            title: "Regulated in the US",
            description: "Brokerage services for US-listed, registered securities are offered through Public Investing, Inc., a registered broker-dealer and FINRA/SIPC member.",
            tag: "FINRA"
          },
          {
            title: "Insurance coverage",
            description: "SIPC protects the cash and securities in your portfolio up to $500,000. FDIC provides up to $5 million in protection for your High-Yield Cash Account.",
            tags: ["FDIC", "SIPC"]
          },
          {
            title: "Financial-grade security",
            description: "We secure your data on Public with AES 256-bit encryption and the latest TLS protocols, ensuring your information stays protected at all times."
          },
          {
            title: "Order integrity",
            description: "Unlike other brokerages, Public does not take payment for order flow from market makers on equity trades, supporting more transparent markets.",
            link: "Learn more →"
          },
          {
            title: "Fee transparency",
            description: "Our straightforward fee structure can help you understand exactly what things cost—and what our incentives are as a business.",
            link: "Learn about fees on Public →"
          },
          {
            title: "99.994% uptime",
            description: "Our reliable platform achieves 99.994% uptime, keeping you connected to the markets whenever you need, so you never miss an opportunity to invest.",
            note: "Based on calendar year 2024."
          }
        ].map((item, index) => (
          <div key={index} className="bg-gray-900/90 p-6 rounded-lg border border-gray-700 shadow-lg">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
            {item.tag && (
              <span className="inline-block bg-gray-800 px-3 py-1 mt-2 text-[#94CEFD] text-[12px] rounded">
                {item.tag}
              </span>
            )}
            {item.tags && (
              <div className="mt-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-gray-800 px-3 text-[#94CEFD] py-1 text-[12px] rounded mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {item.link && (
              <p className="text-blue-400 mt-2 cursor-pointer hover:underline">
                {item.link}
              </p>
            )}
            {item.note && (
              <p className="text-sm text-gray-500 mt-2">{item.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
