import React from "react";

export default function AccountBenefits() {
  return (
    <div className="bg-[#00041C] text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-400 text-sm uppercase tracking-widest">
          Account Benefits
        </p>
        <h1 className="text-4xl font-semibold mt-2">
          As your account value grows,
        </h1>
        <h2 className="text-3xl text-gray-300 mt-2">
          so does your experience on{" "}
          <span className="text-blue-400">Public</span>
        </h2>
      </div>

      {/* Account Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl w-full">
        {/* Base Tier */}
        <div className="bg-[#00041C] p-6 border border-gray-700">
          <h3 className="text-blue-400 text-lg">Base</h3>
          <p className="text-2xl font-semibold mt-1">$1+</p>
          <span className="bg-gray-700 text-xs px-2 py-1 rounded mt-1 inline-block">
            account value
          </span>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Multi-asset investing</li>
            <li>✔ Industry-leading yields</li>
            <li>✔ AI-powered analysis</li>
          </ul>
        </div>

        {/* Premium Tier */}
        <div className="bg-[#00041C] p-6 border border-gray-700">
          <h3 className="text-blue-400 text-lg">Premium</h3>
          <p className="text-2xl font-semibold mt-1">$50,000+</p>
          <span className="bg-gray-700 text-xs px-2 py-1 rounded mt-1 inline-block">
            account value
          </span>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Free extended-hours trading</li>
            <li>✔ Free Investment Plans</li>
            <li>✔ Priority support</li>
          </ul>
        </div>

        {/* Concierge Tier */}
        <div className="bg-[#00041C] p-6 border border-gray-700">
          <h3 className="text-blue-400 text-lg">Concierge</h3>
          <p className="text-2xl font-semibold mt-1">$250,000+</p>
          <span className="bg-gray-700 text-xs px-2 py-1 rounded mt-1 inline-block">
            account value
          </span>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ White-glove VIP support</li>
            <li>✔ Personalized offers</li>
            <li>✔ Exclusive invites</li>
          </ul>
        </div>
      </div>

      {/* Sign Up Button */}
      {/* <div className="mt-12">
        <button
          className="mt-6 px-14 py-3 text-lg text-white rounded-full shadow-xl 
                        bg-gradient-to-b from-[#0050ff] to-[#002db3] 
                        hover:from-[#003fcc] hover:to-[#001f80] 
                        transition duration-300 
                        relative before:absolute before:inset-0 before:rounded-full 
                        before:shadow-[0px_0px_20px_2px_rgba(0,80,255,0.6)]"
        >
          Sign up
        </button>
      </div> */}
    </div>
  );
}
