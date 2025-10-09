import React from "react";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 pt-[100px] pb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-6xl w-full border border-orange-100"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition shadow-sm"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
            >
              Send Message
            </motion.button>
          </form>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center text-gray-700 space-y-6 "
          >
            <div>
              <h3 className="text-xl font-bold text-orange-600">📍 Address</h3>
              <p className="text-gray-600">Faridabad,Haryana 121003</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-600">📧 Email</h3>
              <p className="text-gray-600">ankitkumar20224@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-600">📞 Phone</h3>
              <p className="text-gray-600">+91 8882291407</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
