import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + amount),
    }));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto mt-[100px]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-600">
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 rounded-xl p-4 shadow-md bg-white/60 backdrop-blur-md"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-24 h-24 rounded-xl object-cover shadow"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-orange-500 font-bold text-lg">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Controls Container: Quantity + Delete */}
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-lg bg-gray-200 hover:bg-gray-300 rounded-full transition"
                    >
                      −
                    </button>
                    <span className="font-medium text-lg">{quantities[item.id]}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-lg bg-gray-200 hover:bg-gray-300 rounded-full transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md transition"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Total & Checkout */}
          <div className="mt-8 flex flex-col items-end space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-orange-600"
            >
              Total: ${totalPrice.toFixed(2)}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-md transition"
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
