"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCrown, FaChartLine, FaShieldAlt, FaLightbulb, FaEnvelope, FaMicrosoft, FaGoogle } from 'react-icons/fa';

export default function Premium() {
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleEmailClick = (provider) => {
    const email = 'info@publictrade.net';
    const subject = 'Premium Membership Inquiry';
    const body = 'I am interested in learning more about your Premium Membership features.';

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

  const features = [
    {
      icon: <FaCrown className="w-8 h-8 text-[#7c3aed]" />,
      title: "Premium Trading Tools",
      description: "Access advanced trading tools and real-time market data for better decision making.",
      features: ["Advanced Charts", "Real-time Alerts", "Custom Indicators"]
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#7c3aed]" />,
      title: "Priority Support",
      description: "Get dedicated support from our team of trading experts.",
      features: ["24/7 Support", "Priority Response", "Personal Account Manager"]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[#7c3aed]" />,
      title: "Enhanced Security",
      description: "Advanced security features to protect your investments.",
      features: ["Two-Factor Auth", "IP Restrictions", "Secure API Access"]
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
              <FaCrown className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Membership
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of your trading with our premium features
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Features Section with Modern Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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

      {/* Benefits Section with Gradient Background */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Premium?</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Experience the difference with our premium features designed for serious traders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="text-4xl font-bold text-yellow-400 mb-4">50%</div>
              <h3 className="text-xl font-semibold mb-2">Lower Commissions</h3>
              <p className="text-purple-200">Enjoy reduced trading fees with premium membership</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="text-4xl font-bold text-yellow-400 mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
              <p className="text-purple-200">Get instant access to our expert support team</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="text-4xl font-bold text-yellow-400 mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">Secure Trading</h3>
              <p className="text-purple-200">Advanced security features to protect your investments</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Modern Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Upgrade?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Take your trading to the next level with our premium features
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

