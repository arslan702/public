"use client"
import React, { useState } from 'react';
import { FaHeadset, FaEnvelope, FaGoogle, FaMicrosoft, FaQuestionCircle, FaShieldAlt, FaLock, FaUserShield, FaChartLine, FaWallet } from 'react-icons/fa';

export default function Help() {
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleEmailClick = (provider) => {
    const email = 'support@stocks.com';
    const subject = 'Support Request';
    const body = 'I need help with my account.';
    
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

  const supportTopics = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[#7c3aed]" />,
      title: "Account Security",
      description: "Learn about our security measures and how to protect your account",
      items: ["Two-Factor Authentication", "Password Management", "Security Alerts", "Device Management"]
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#7c3aed]" />,
      title: "Trading Support",
      description: "Get help with trading features and platform usage",
      items: ["Order Types", "Market Hours", "Trading Limits", "Portfolio Management"]
    },
    {
      icon: <FaWallet className="w-8 h-8 text-[#7c3aed]" />,
      title: "Account & Billing",
      description: "Information about account management and billing",
      items: ["Account Verification", "Deposit Methods", "Withdrawal Process", "Fee Structure"]
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
              <FaHeadset className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get support for your trading journey and account management
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Support Topics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-6 p-4 bg-purple-50 rounded-xl inline-block">
                {topic.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{topic.title}</h3>
              <p className="text-gray-600 mb-6">{topic.description}</p>
              <ul className="space-y-3">
                {topic.items.map((item, idx) => (
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

      {/* Contact Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaEnvelope className="w-16 h-16 text-[#7c3aed]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Need More Help?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Our support team is available 24/7 to assist you with any questions or concerns
          </p>
          <div className="relative inline-block">
            <button 
              onClick={() => setShowEmailOptions(!showEmailOptions)}
              className="bg-[#7c3aed] text-white px-8 py-4 rounded-xl hover:bg-[#6d28d9] transition duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Contact Support</span>
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
