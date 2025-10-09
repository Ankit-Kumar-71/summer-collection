import React from "react";

const brands = [
  { name: "MamaEarth", image: "https://images.meesho.com/images/marketing/1743159363205.webp" },
  { name: "Wild Stone", image: "https://images.meesho.com/images/marketing/1744636599446.webp" },
  { name: "Plum", image: "https://images.meesho.com/images/marketing/1744636558884.webp" },
  { name: "Nivea", image: "https://images.meesho.com/images/marketing/1743159377598.webp" },
  { name: "Himalaya", image: "https://images.meesho.com/images/marketing/1743159302944.webp" },
  { name: "MI", image: "https://images.meesho.com/images/marketing/1743159393231.webp" },
  { name: "Bajaj", image: "https://images.meesho.com/images/marketing/1743159415385.webp" },
];

const BrandSlider = () => {
  const allBrands = [...brands, ...brands]; // Duplicate for loop

  return (
    <div className="bg-[#ffffff] py-6 overflow-hidden group">
      <div className="relative w-full">
        <div className="flex w-max whitespace-nowrap gap-6 px-4 animate-marquee group-hover:[animation-play-state:paused]">
          {allBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center min-w-[140px] h-[80px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="object-contain h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
