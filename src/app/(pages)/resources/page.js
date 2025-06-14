"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBook, FaChartLine, FaCalculator, FaNewspaper, FaGraduationCap, FaLightbulb, FaChartPie, FaGlobe, FaEnvelope, FaGoogle, FaMicrosoft } from 'react-icons/fa';

export default function Resources() {
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleEmailClick = (provider) => {
    const email = 'support@stocks.com';
    const subject = 'Resources Inquiry';
    const body = 'I would like to learn more about your investment resources.';
    
    let mailtoLink = '';
    switch(provider) {
      case 'gmail':
        mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      case 'outlook':
        mailtoLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      default:
        mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    window.open(mailtoLink, '_blank');
  };

  const learningResources = [
    {
      icon: <FaBook className="w-8 h-8 text-[#7c3aed]" />,
      title: "Investing Basics",
      description: "Learn the fundamentals of investing, from understanding market basics to building your first portfolio.",
      topics: ["Market Basics", "Investment Types", "Risk Management", "Portfolio Building"]
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#7c3aed]" />,
      title: "Trading Strategies",
      description: "Explore various trading strategies and learn how to implement them effectively in different market conditions.",
      topics: ["Technical Analysis", "Fundamental Analysis", "Day Trading", "Swing Trading"]
    },
    {
      icon: <FaCalculator className="w-8 h-8 text-[#7c3aed]" />,
      title: "Investment Calculators",
      description: "Use our suite of calculators to plan your investments and understand potential returns.",
      topics: ["Compound Interest", "Retirement Planning", "Loan Calculator", "ROI Calculator"]
    }
  ];

  const marketTools = [
    {
      icon: <FaNewspaper className="w-8 h-8 text-[#7c3aed]" />,
      title: "Market News",
      description: "Stay updated with the latest market news, trends, and analysis from our expert team."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-[#7c3aed]" />,
      title: "Webinars",
      description: "Join our live webinars and learn from industry experts about various investment topics."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#7c3aed]" />,
      title: "Investment Ideas",
      description: "Discover curated investment ideas and opportunities based on market research and analysis."
    }
  ];

  const glossaries = [
    {
      title: "Investing Glossary",
      terms: ["Bull Market", "Bear Market", "Dividend", "Market Cap"]
    },
    {
      title: "Options Trading Glossary",
      terms: ["Call Option", "Put Option", "Strike Price", "Expiration Date"]
    },
    {
      title: "Crypto Glossary",
      terms: ["Blockchain", "DeFi", "Smart Contract", "Token"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section with Diagonal Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="inline-block mb-6">
              <FaBook className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Educational Resources
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Empower your investment journey with our comprehensive learning materials and tools
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Learning Resources Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-6 p-4 bg-purple-50 rounded-xl inline-block">
                {resource.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <ul className="space-y-3">
                {resource.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#7c3aed] rounded-full mr-3"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Market Tools Section with Gradient Background */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Market Tools & Insights</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Stay informed and make better trading decisions with our comprehensive tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-purple-200">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glossaries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Investment Glossaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {glossaries.map((glossary, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-[#7c3aed]">{glossary.title}</h3>
              <div className="space-y-3">
                {glossary.terms.map((term, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-xl transition duration-300">
                    <span className="text-gray-700">{term}</span>
                    <FaGlobe className="w-5 h-5 text-[#7c3aed]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaGraduationCap className="w-16 h-16 text-[#7c3aed]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Start Learning Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Access our comprehensive resources and take your investment knowledge to the next level
          </p>
          <div className="relative inline-block">
            <button 
              onClick={() => setShowEmailOptions(!showEmailOptions)}
              className="bg-[#7c3aed] text-white px-8 py-4 rounded-xl hover:bg-[#6d28d9] transition duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
            
            {showEmailOptions && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-50">
                <button
                  onClick={() => handleEmailClick('gmail')}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-2 text-gray-900"
                >
                  <FaGoogle className="w-5 h-5 text-[#EA4335]" />
                  <span>Gmail</span>
                </button>
                <button
                  onClick={() => handleEmailClick('outlook')}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-2 text-gray-900"
                >
                  <FaMicrosoft className="w-5 h-5 text-[#0078D4]" />
                  <span>Outlook</span>
                </button>
                <button
                  onClick={() => handleEmailClick('default')}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-2 text-gray-900"
                >
                  <FaEnvelope className="w-5 h-5 text-[#7c3aed]" />
                  <span>Default Email</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
