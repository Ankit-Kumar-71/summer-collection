import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupText(`${item.title} added to cart!`);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 600);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">Loading products...</p>
      </div>
    );

  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <>
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-500 animate-bounce">
          {popupText}
        </div>
      )}

      {/* Product Section */}
      <section className="mt-[100px] px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-10 animate-fade-in-down">
          Shop Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-orange-600 font-bold mb-3">${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
