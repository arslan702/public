"use client"
import React from 'react';
import Image from 'next/image';
import { FaUsers, FaChartLine, FaShieldAlt, FaLightbulb, FaGlobe, FaHandshake, FaAward, FaRocket } from 'react-icons/fa';

export default function Company() {
  const values = [
    {
      icon: <FaUsers className="w-8 h-8 text-[#7c3aed]" />,
      title: "Client First",
      description: "We prioritize our clients' success and satisfaction in everything we do."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#7c3aed]" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and trading solutions."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[#7c3aed]" />,
      title: "Security",
      description: "Maintaining the highest standards of security and trust in all our operations."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#7c3aed]" />,
      title: "Excellence",
      description: "Committed to delivering excellence in every aspect of our service."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "PublicTrade was established with a vision to revolutionize online trading."
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Successfully launched our advanced trading platform with AI capabilities."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded our services to multiple countries across different continents."
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for our innovative approach to AI-powered trading solutions."
    }
  ];

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      description: "20+ years of experience in financial markets and technology."
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      description: "Expert in AI and machine learning with a focus on financial applications."
    },
    {
      name: "Michael Chen",
      position: "Head of Trading",
      description: "Former Wall Street trader with extensive market expertise."
    },
    {
      name: "Emily Brown",
      position: "Head of Client Relations",
      description: "Dedicated to ensuring exceptional client experience and satisfaction."
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
              <FaHandshake className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About PublicTrade
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Revolutionizing online trading with cutting-edge technology and unwavering commitment to our clients
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Mission Section with Modern Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To democratize access to advanced trading technology and empower investors worldwide with innovative solutions that make trading more accessible, secure, and profitable.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-6 p-4 bg-purple-50 rounded-xl inline-block">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones Section with Gradient Background */}
      {/* <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <div className="text-3xl font-bold text-yellow-400 mb-3">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-purple-200">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-1 transition duration-300">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FaUsers className="w-12 h-12 text-[#7c3aed]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-[#7c3aed] font-medium mb-3">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaGlobe className="w-16 h-16 text-[#7c3aed]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Global Presence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Serving traders and investors across multiple continents with localized support and expertise
          </p>
        </div>
      </div>
    </div>
  );
}
