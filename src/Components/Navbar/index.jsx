"use client"
import Link from 'next/link';
import React from 'react'

const menuItems = [
  { name: "Invest" , path: "/invest"},
  { name: "Resources", path: "/resources" },
  { name: "Company", path: "/company" },
  { name: "Premium", path: "/premium" },
  { name: "Alpha", path: "/alpha" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-300 bg-white">
      {/* Logo */}
      <Link href={"/"}>
        <div className="text-lg font-semibold text-black flex items-center space-x-1">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <span>public</span>
        </div>
      </Link>
      
      {/* Menu Items */}
      <ul className="flex space-x-8 text-sm font-medium text-gray-700 ml-auto">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-2 py-1 hover:text-black cursor-pointer transition-colors duration-200"
          >
            <Link href={item?.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
