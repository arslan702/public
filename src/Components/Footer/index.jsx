import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedin, FaTiktok } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../Images/logo.svg"; // Ensure correct path
import img from "../../Images/16.webp"; // Ensure correct path

// Footer Component
const Footer = ({ menuItems }) => {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {menuItems.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-[14px] ">{section.title}</h3>
            <ul className="mt-2 space-y-2 text-gray-600 text-[12px] ">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-[#2958E4] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social & Branding */}
        <div>
          <Image src={logo} alt="Public Logo" width={100} height={30} />
          <p className="text-xs text-gray-500 mt-2">
            Check the background of this firm on{" "}
            <a href="#" className="text-blue-500">FINRA’s BrokerCheck</a>.
          </p>
          <p className="text-xs text-blue-500 mt-2">
            Open to the Public Investing, Inc. <br /> Customer Relationship Summary.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <RxCross2 className="text-xl text-gray-600 cursor-pointer" />
            <FaInstagram className="text-xl text-gray-600 cursor-pointer" />
            <FaFacebookF className="text-xl text-gray-600 cursor-pointer" />
            <FaLinkedin className="text-xl text-gray-600 cursor-pointer" />
            <FaTiktok className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Fund Account Section
const FundAccountSection = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 relative">
      {/* Text Content */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Fund your account in
      </h2>
      <h3 className="text-2xl md:text-3xl text-blue-400 mt-2 text-center">
        5 minutes or less
      </h3>

      {/* Sign-Up Button */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg transition duration-300 hover:bg-blue-500">
        Sign up
      </button>

      {/* Image Section */}
      <div className="relative mt-12 w-full flex justify-center">
        <div className="max-w-4xl w-full flex justify-center">
          <Image src={img} alt="Fund Account UI" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function HomePage() {
  const footerMenu = [
    {
      title: "Products",
      items: [
        "Stocks", "ETFs", "Crypto (Offered by Bakkt Crypto)", "Options", 
        "Margin", "Bonds", "Treasuries", "High-Yield Cash Account", "Premium", "Alpha"
      ],
    },
    {
      title: "Resources",
      items: ["About Us", "Learn", "Careers", "Public’s Fee Schedule"],
    },
    {
      title: "Quick Links",
      items: [
        "Investment Themes", "Investing Glossary", "Fixed Income Glossary", 
        "Options Trading Glossary", "Transfer your Portfolio", 
        "Treasury Yield Curve", "High Yield Savings Calculator"
      ],
    },
    {
      title: "Contact Us",
      items: ["Help", "FAQ", "support@public.com", "press@public.com"],
    },
  ];

  return (
    <div>
      <Footer menuItems={footerMenu} />
    </div>
  );
}
