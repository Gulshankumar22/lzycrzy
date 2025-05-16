import React, { useState } from "react";
import {
  Home,
  Building2,
  Play,
  HandHelping,
  Film,
  Search,
  User,
  Bell,
  MessageCircle,
  Settings,
  Menu, // Added Menu icon for mobile
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-bold text-xl text-gray-800 mr-2">LzyCrazy</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline"
            aria-label="Toggle Mobile Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <div
          className={`flex flex-col md:flex-row items-center  gap-4 md:gap-6 lg:gap-8 ${
            isMobileMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Home className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
          <Building2 className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
          <Play className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
          <Film className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
          <HandHelping className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-md pr-50 py-1.5 focus-within:border-blue-500 transition-colors">
            <Search className="w- h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Start typing to search..."
              className="outline-none text-sm "
            />
          </div>

          {/* User and Notifications */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">Test</span>
            <User className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
            <MessageCircle className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
            <Bell className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
            <Settings className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
