import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    title: "Summer Dress",
    price: "39",
    images: "https://images.meesho.com/images/products/459967567/eetha_1200.jpg",
  },
  {
    id: 2,
    title: "Beach Shirt",
    price: "29",
    images: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/474522/item/ingoods_56_474522_3x4.jpg?width=369",
  },
  {
    id: 3,
    title: "Shorts",
    price: "24",
    images: "https://m.media-amazon.com/images/I/71WF7ugcEgL._AC_SR480%2C570_.jpg",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupText(`${item.title} added to cart!`);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      {/* Popup notification */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {popupText}
        </div>
      )}

      {/* Section Wrapper */}
      <div className="w-full mt-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Latest Products
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow hover:shadow-lg transition-all bg-white flex flex-col"
              >
                <div className="h-64 overflow-hidden rounded-t">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-orange-600 font-bold text-md">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
