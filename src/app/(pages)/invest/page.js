"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChartLine, FaCoins, FaChartPie, FaShieldAlt, FaRobot, FaClock, FaHandshake, FaEnvelope, FaGoogle, FaMicrosoft } from 'react-icons/fa';

export default function Invest() {
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleEmailClick = (provider) => {
    const email = 'support@stocks.com';
    const subject = 'Investment Inquiry';
    const body = 'I would like to learn more about your investment options.';
    
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

  const investmentOptions = [
    {
      icon: <FaChartLine className="w-8 h-8 text-[#7c3aed]" />,
      title: "Stocks",
      description: "Trade stocks from major global exchanges with real-time market data and advanced analysis tools.",
      features: ["Global Markets", "Real-time Data", "Advanced Charts"]
    },
    {
      icon: <FaCoins className="w-8 h-8 text-[#7c3aed]" />,
      title: "Crypto",
      description: "Access a wide range of cryptocurrencies with secure trading and instant execution.",
      features: ["Multiple Coins", "24/7 Trading", "Secure Storage"]
    },
    {
      icon: <FaChartPie className="w-8 h-8 text-[#7c3aed]" />,
      title: "ETFs",
      description: "Diversify your portfolio with a variety of Exchange-Traded Funds across different sectors.",
      features: ["Sector ETFs", "Index Funds", "Commodity ETFs"]
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[#7c3aed]" />,
      title: "High-Yield Cash Account",
      description: "Earn competitive interest rates on your uninvested cash while maintaining full liquidity."
    },
    {
      icon: <FaRobot className="w-8 h-8 text-[#7c3aed]" />,
      title: "AI-Powered Insights",
      description: "Get intelligent trading suggestions and market analysis powered by advanced AI technology."
    },
    {
      icon: <FaClock className="w-8 h-8 text-[#7c3aed]" />,
      title: "24/7 Trading",
      description: "Trade around the clock with our advanced platform that never sleeps."
    }
  ];

  const stats = [
    {
      title: "Commission",
      value: "0%",
      description: "Zero commission on all trades"
    },
    {
      title: "Trading Hours",
      value: "24/7",
      description: "Trade anytime, anywhere"
    },
    {
      title: "Protection",
      value: "100%",
      description: "Secure trading environment"
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
              <FaChartLine className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Start Your Investment Journey
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Access global markets and build your portfolio with our advanced trading platform
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Investment Options Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investmentOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-6 p-4 bg-purple-50 rounded-xl inline-block">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <ul className="space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#7c3aed] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section with Gradient Background */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Experience the difference with our comprehensive trading features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Trading Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-1 transition duration-300">
              <div className="text-4xl font-bold text-[#7c3aed] mb-4">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaChartLine className="w-16 h-16 text-[#7c3aed]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Start Your Investment Journey
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Join thousands of successful investors who trust our platform for their financial growth
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

