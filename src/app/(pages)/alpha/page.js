"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaRobot, FaChartLine, FaBrain, FaShieldAlt, FaLightbulb, FaChartPie, FaCog, FaRocket, FaEnvelope, FaMicrosoft, FaGoogle } from 'react-icons/fa';

export default function Alpha() {
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleEmailClick = (provider) => {
    const email = 'info@publictrade.net';
    const subject = 'AI Trading Inquiry';
    const body = 'I am interested in learning more about your AI-powered trading features.';

    let url;
    switch (provider) {
      case 'gmail':
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      case 'outlook':
        url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      default:
        url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    window.open(url, '_blank');
    setShowEmailOptions(false);
  };

  const aiFeatures = [
    {
      icon: <FaRobot className="w-8 h-8 text-[#7c3aed]" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze market patterns and predict potential movements with high accuracy.",
      features: ["Pattern Recognition", "Market Sentiment Analysis", "Real-time Data Processing"]
    },
    {
      icon: <FaBrain className="w-8 h-8 text-[#7c3aed]" />,
      title: "Smart Trading Signals",
      description: "Receive intelligent trading signals based on comprehensive market analysis and historical data patterns.",
      features: ["Entry/Exit Points", "Risk Assessment", "Portfolio Optimization"]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[#7c3aed]" />,
      title: "Risk Management",
      description: "AI-driven risk assessment and management tools to protect your investments and maximize returns.",
      features: ["Stop-Loss Optimization", "Position Sizing", "Risk Scoring"]
    }
  ];

  const aiTools = [
    {
      icon: <FaChartLine className="w-8 h-8 text-[#7c3aed]" />,
      title: "Predictive Analytics",
      description: "Leverage advanced AI models to forecast market trends and identify potential opportunities."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#7c3aed]" />,
      title: "Smart Insights",
      description: "Get personalized trading insights and recommendations based on your investment style and goals."
    },
    {
      icon: <FaChartPie className="w-8 h-8 text-[#7c3aed]" />,
      title: "Portfolio Optimization",
      description: "AI-powered portfolio analysis and optimization to maximize returns while minimizing risk."
    }
  ];

  const benefits = [
    {
      title: "Enhanced Accuracy",
      stats: "85%",
      description: "Improved prediction accuracy through machine learning algorithms"
    },
    {
      title: "Time Saved",
      stats: "60%",
      description: "Reduced time spent on market analysis and research"
    },
    {
      title: "Risk Reduction",
      stats: "40%",
      description: "Decreased portfolio risk through AI-driven risk management"
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
              <FaRobot className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Trading
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Experience the future of trading with our advanced artificial intelligence technology
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Features Section with Modern Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-6 p-4 bg-purple-50 rounded-xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#7c3aed] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools Section with Gradient Background */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced AI Tools</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Powerful tools designed to enhance your trading experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-purple-200">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">AI Trading Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-1 transition duration-300">
              <div className="text-4xl font-bold text-[#7c3aed] mb-4">{benefit.stats}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Modern Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Start Trading with AI
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Join the future of trading with our advanced AI-powered platform
          </p>
          <div className="relative inline-block">
            <button
              onClick={() => setShowEmailOptions(!showEmailOptions)}
              className="bg-[#7c3aed] text-white px-8 py-4 rounded-xl hover:bg-[#6d28d9] transition duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="w-5 h-5" />
              Contact Us
            </button>
            
            {showEmailOptions && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 z-10">
                <button
                  onClick={() => handleEmailClick('gmail')}
                  className="w-full px-4 py-3 text-left hover:bg-purple-50 flex items-center gap-2 text-gray-900"
                >
                  <FaGoogle className="w-5 h-5 text-[#EA4335]" />
                  <span>Gmail</span>
                </button>
                <button
                  onClick={() => handleEmailClick('outlook')}
                  className="w-full px-4 py-3 text-left hover:bg-purple-50 flex items-center gap-2 text-gray-900"
                >
                  <FaMicrosoft className="w-5 h-5 text-[#0078D4]" />
                  <span>Outlook</span>
                </button>
                <button
                  onClick={() => handleEmailClick('default')}
                  className="w-full px-4 py-3 text-left hover:bg-purple-50 flex items-center gap-2 text-gray-900"
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
