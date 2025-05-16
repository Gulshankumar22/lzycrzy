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
  PlayCircle,
} from "lucide-react";

const categories = [
  { name: "Phone", icon: Phone },
  { name: "Fashion", icon: Zap },
  { name: "Home Essentials", icon: ShoppingCart },
  { name: "Direct By Farm", icon: Calendar },
  { name: "Vehicle", icon: Users },
  { name: "Property", icon: Flag },
  { name: "Furniture", icon: Globe },
  { name: "Electronics", icon: Tv2 },
  { name: "Fashion Acc", icon: FileText },
  { name: "Self Made", icon: FileText },
  { name: "Home Decoration", icon: Home },
  { name: "Garden", icon: Flower2 },
];

const MarketVideo = ({ src, title }) => {
  const isVideoAvailable = src !== null && src !== undefined && src !== "";

  return (
    <div className="relative rounded-lg shadow-md aspect-w-16 aspect-h-9 overflow-hidden group">
      {isVideoAvailable ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <PlayCircle className="w-12 h-12 text-gray-300 mb-4 opacity-75" />
          <p className="text-sm font-semibold">Video unavailable</p>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:underline mt-2"
          >
            Watch on YouTube
          </a>
        </div>
      )}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        FEATURED
      </div>
    </div>
  );
};

const Market = () => {
  const videos = [
    {
      title: "Featured Product 1",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Featured Product 2",
      src: "https://www.youtube.com/embed/y6o7M6eFcWw",
    },
    {
      title: "Promo Video",
      src: null,
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <MarketVideo key={index} src={video.src} title={video.title} />
        ))}
      </div>
    </div>
  );
};

const MarketApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="bg-gray-200 rounded-lg shadow-md w-full md:w-1/4 mt-1 ml-2">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900">CATEGORIES</h2>
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Categories Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className={`space-y-2 ${isOpen ? "block" : "hidden md:block"}`}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center py-2 px-3 bg-white rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
            >
              <category.icon className="w-5 h-5 mr-2 text-gray-600" />
              <span className="font-medium text-gray-800">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow mt-4 mr-2">
        <Market />
      </div>
    </div>
  );
};

export default MarketApp;
