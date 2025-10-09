import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    image: "https://rukminim2.flixcart.com/fk-p-flap/120/120/image/4ff8b23b2fd5d0dc.jpg?q=80",
    title: "Car & Bike Accessori...",
    offer: "Min 40% Off",
  },
  {
    image: "https://rukminim2.flixcart.com/image/120/120/xif0q/outdoor-toy/w/d/w/-original-imah44c7dzgzndhu.jpeg?q=80",
    title: "Toys and Games!",
    offer: "Upto 80% Off",
  },
  {
    image: "https://rukminim2.flixcart.com/image/120/120/kmxsakw0/milk-drink-mix/8/l/k/inner-strength-formula-carton-cadbury-bournvita-original-imagfq3fywyzhfew.jpeg?q=80",
    title: "Health essentials",
    offer: "Up to 70% off",
  },
  {
    image: "https://rukminim2.flixcart.com/image/120/120/kazor680/cycle/4/f/d/scout-26t-sea-blue-black-for-ride-18-leader-single-speed-original-imafsf6wwfsumagx.jpeg?q=80",
    title: "City & MTB Cycles",
    offer: "Min 40% Off",
  },
  {
    image: "https://rukminim2.flixcart.com/image/120/120/kf2v3ww0/lipstick/q/f/f/6-fab-5-5-in-1-lipstick-renee-original-imafvhp2tuft7rxd.jpeg?q=80",
    title: "Renee & SUGAR",
    offer: "Min 40% off",
  },
  {
    image: "https://rukminim2.flixcart.com/image/120/120/xif0q/cereal-flake/k/s/r/-original-imah5mpsnnpu7duv.jpeg?q=80",
    title: "Breakfast Essentials",
    offer: "Up to 65% Off",
  },
  {
    image: "https://rukminim2.flixcart.com/image/120/120/xif0q/moisturizer-cream/o/m/h/-original-imagzzm598qvyybx.jpeg?q=80",
    title: "Skincare Essentials",
    offer: "Up to 65% Off",
  },
];

export default function BeautySlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Beauty Auto & more</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-8"
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-[130px] flex-shrink-0 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[200px] h-40 object-contain mb-2"
              />
              <p className="text-sm">{item.title}</p>
              <p className="text-sm font-semibold text-green-600">{item.offer}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
