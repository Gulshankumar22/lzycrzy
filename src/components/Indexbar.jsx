import React, { useState } from "react";
import {
  Phone,
  Zap,
  ShoppingCart,
  Calendar,
  Users,
  Flag,
  Globe,
  Tv2,
  FileText,
  Home,
  Flower2,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const options = [
  { name: "Lzycrazy", icon: Phone, route: "/lzycrazy" }, // Added routes
  { name: "My Ads", icon: Zap, route: "/myads" },
  { name: "My Order", icon: ShoppingCart, route: "/myorder" },
  { name: "Market", icon: Calendar, route: "/market" }, // Route for Market
  { name: "My Group", icon: Users, route: "/mygroup" },
  { name: "Movies", icon: Flag, route: "/movies" },
  { name: "Saved", icon: Globe, route: "/saved" },
];

const Indexbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOptionClick = (route) => {
    navigate(route); // Use navigate to go to the specified route
    setIsOpen(false); // Close the menu after clicking (for mobile)
  };

  return (
    <div className="sticky shadow-md w-full md:w-64 mt-1 ml-2">
      <div className="flex justify-between items-center p-4 ">
        <button
          className="md:hidden shadow-xl text-gray-600 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <div className={`space-y-2 ${isOpen ? "block" : "hidden md:block"}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center py-2 px-3 bg-gray-200 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
            onClick={() => handleOptionClick(option.route)} // Call handleOptionClick
          >
            <option.icon className="w-5 h-5 mr-2 text-gray-600" />
            <span className="font-medium text-purple-900">{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indexbar;
