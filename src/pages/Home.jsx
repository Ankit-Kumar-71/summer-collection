import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "./Products";
import BrandSlider from "../components/BrandSlider";
import Last from "../components/Last";
import BeautySlider from "../components/BeautySlider";
import { Link } from "react-router-dom";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Logo Loader on first website open only (2.5 seconds)
  useEffect(() => {
    const logoShown = sessionStorage.getItem("logoShown");

    if (!logoShown) {
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("logoShown", "true");
      }, 2500);

      return () => clearTimeout(loadTimer);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Popup after 10 sec (only if not already shown in session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");

    if (!alreadyShown) {
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);

      return () => clearTimeout(popupTimer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupShown", "true");
  };

  // Show logo loader first
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-28 w-28 animate-bounce"
          style={{ animationDuration: "1.5s" }}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Hero />
      <Products />
<BrandSlider />
<Last />
<BeautySlider />
      {/* <BrandSlider /> */}
      
      {/* Login/Signup Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-md relative animate-fadeIn scale-95 sm:scale-100 sm:animate-scaleUp">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-sky-400 text-3xl font-bold focus:outline-none"
              aria-label="Close popup"
            >
              ×
            </button>
            <h2
              id="modal-title"
              className="text-3xl font-extrabold text-orange-500 mb-3 text-center"
            >
              Welcome Back!
            </h2>
            <p
              id="modal-description"
              className="text-center text-gray-700 mb-6 text-lg"
            >
              Login or Sign Up to continue shopping with us
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to="/login"
                className="bg-orange-300 hover:bg-orange-400 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-orange-400 hover:bg-orange-400 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleUp {
          animation: scaleUp 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
