"use client"
import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaEnvelope, FaGoogle, FaMicrosoft } from 'react-icons/fa';

export default function FAQ() {
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleEmailClick = (provider) => {
    const email = 'support@stocks.com';
    const subject = 'FAQ Inquiry';
    const body = 'I have a question about your platform.';
    
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

  const faqs = [
    {
      question: "What types of investments can I make on your platform?",
      answer: "Our platform offers a wide range of investment options including stocks, cryptocurrencies, and ETFs. You can trade major stocks from global markets, popular cryptocurrencies like Bitcoin and Ethereum, and various ETFs covering different sectors and regions. Our AI-powered tools help you make informed investment decisions across all these asset classes."
    },
    {
      question: "How does your AI-powered trading system work?",
      answer: "Our AI trading system uses advanced machine learning algorithms to analyze market data, identify patterns, and generate trading signals. It processes vast amounts of historical and real-time data to provide insights and predictions. The system continuously learns and adapts to market conditions, helping you make more informed trading decisions while managing risk effectively."
    },
    {
      question: "What are the fees and commissions for trading?",
      answer: "We offer competitive pricing with zero commission on stock trades. For cryptocurrency trading, we charge a small fee of 0.1% per trade. There are no hidden fees or account maintenance charges. Premium members get additional benefits including lower crypto trading fees and access to advanced AI features."
    },
    {
      question: "How secure is my investment on your platform?",
      answer: "Security is our top priority. We implement bank-level security measures including two-factor authentication, encryption, and secure socket layer (SSL) technology. Your funds are protected by our security protocols, and we maintain strict compliance with financial regulations. Additionally, we offer insurance coverage for digital assets and maintain segregated accounts for client funds."
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
              <FaQuestionCircle className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="w-5 h-5 text-[#7c3aed]" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-[#7c3aed]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaQuestionCircle className="w-16 h-16 text-[#7c3aed]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Our support team is here to help you with any questions you may have
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
