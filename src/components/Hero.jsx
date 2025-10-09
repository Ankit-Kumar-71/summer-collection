import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🔄",
    title: "7 Days Easy Return",
    delay: 0.2,
  },
  {
    icon: "💵",
    title: "Cash on Delivery",
    delay: 0.4,
  },
  {
    icon: "💎",
    title: "Lowest Prices",
    delay: 0.6,
  },
];

export default function HeroSection() {
  return (
    <div className="w-full h-[650px] bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.meesho.com/images/marketing/1746425994914.webp')",
      }}
    >
      {/* Overlay */}
      

      {/* Main Section */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between min-h-[50vh]">
        
        {/* Left Side (Optional Image or blank space) */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-[250px] md:h-[450px] mb-6 md:mb-0">
          {/* Add an image here if needed */}
        </div>

        {/* Right Text Side */}
        <div className="w-full md:w-1/2 md:ml-60 text-center md:text-left space-y-6 text-white ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Smart Shopping <br />
            <span className="text-white">Trusted by Millions</span>
          </h1>
          <button className="bg-white text-[#7a0570] px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white text-gray-800 py-8 border-t z-20 relative">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-4 px-6 rounded-lg shadow-md bg-gray-50 hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-xl">{feature.icon}</span>
              <span className="text-base font-medium text-center">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
