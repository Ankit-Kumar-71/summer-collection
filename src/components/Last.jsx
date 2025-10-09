import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Lehengas",
    image: "https://images.meesho.com/images/marketing/1744722796811.webp",
  },
  {
    title: "Menwear",
    image: "https://images.meesho.com/images/marketing/1744635113661.webp",
  },
  {
    title: "Sarees",
    image: "https://images.meesho.com/images/marketing/1744635139351.webp",
  },
  {
    title: "Jewellery",
    image: "https://images.meesho.com/images/marketing/1744635189897.webp",
  },
];

const Last = () => {
  return (
    <div className="relative w-full text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.meesho.com/images/marketing/1744698265981.webp')",
        }}
      ></div>

      {/* Overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-20 py-16 md:py-28 flex-wrap">
        {/* Left Section */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="block md:hidden text-4xl font-bold text-yellow-400 text-center">
  ✨ Gold
</h1>
<p className="mt-2 text-base text-white text-center md:hidden">
  Products you Love. Quality we Trust.
</p>
          {/* Button visible only on md and up */}
<button className="hidden mt-[415px] md:inline-block  px-9 py-3 bg-transparent hover:bg-yellow-600 text-[#ffd182] font-semibold rounded-lg transition duration-300 border-2 border-[#ffd182] ]">
  Shop Now
</button>

        </motion.div>

        {/* Right Categories */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-20 h-20 mx-auto object-contain mb-2"
              />
              <h3 className="text-white text-lg font-medium">{cat.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Last;
