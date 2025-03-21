"use client"
import React from 'react'



import { useState } from "react";

const menuItems = [
  { name: "Invest", submenu: ["Stocks", "Crypto", "ETFs"] },
  { name: "Resources", submenu: ["Blog", "Guides", "Webinars"] },
  { name: "Company", submenu: ["About Us", "Careers", "Contact"] },
  { name: "Premium", submenu: ["Features", "Pricing"] },
  { name: "Alpha", submenu: [] },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="flex items-center px-10 py-4 border-b border-gray-300 bg-white">
    {/* Logo */}
    <div className="text-lg font-semibold text-black flex items-center space-x-1 mr-auto">
      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      <span>public</span>
    </div>
    
    {/* Menu Items */}
    <ul className="flex space-x-8 text-sm font-medium text-gray-700 mr-6">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative px-2 py-1 hover:text-black cursor-pointer"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {item.name}
          {item.submenu.length > 0 && activeMenu === index && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md">
              {item.submenu.map((sub, subIndex) => (
                <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    
    {/* Auth Buttons */}
    <div className="flex space-x-4">
      <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">Sign In</button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Get Started</button>
    </div>
  </nav>
  );
}
