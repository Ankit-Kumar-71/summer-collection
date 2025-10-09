import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav
        style={isScrolled ? { boxShadow: "0 4px 6px -4px rgba(0, 0, 0, 0.1)" } : {}}
        className={`fixed top-0 left-1/2 transform bg-white -translate-x-1/2 z-50 transition-all duration-500 ease-in-out 
          ${isScrolled
            ? "bg-white w-[95%] mt-2 rounded-xl border"
            : "w-full mt-0"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png" // Ensure this path is correct for your project
              alt="Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Hamburger Menu Icon */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen
                ? <X size={24} className={`${isScrolled ? "text-orange-500" : "text-black"}`} />
                : <Menu size={24} className={`${isScrolled ? "text-orange-500" : "text-black"}`} />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className={`hidden sm:flex gap-8 text-base items-center font-medium transition-colors duration-300 
            ${isScrolled ? "text-[#7a0570]" : "text-black"}`}>
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Contact", path: "/contact" },
              { name: "Login", path: "/login" },
              { name: "Sign Up", path: "/signup" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="relative group px-1 py-2 inline-block hover:text-orange-500">
                  {name}
                  <span className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 mt-1 
                    ${isScrolled ? "bg-orange-300" : "bg-orange-200"}`}></span>
                </Link>
              </li>
            ))}

            {/* Cart Icon */}
            <li className="relative">
              <Link to="/cart" className="relative group px-1 py-2 inline-block hover:text-orange-500">
                Cart
                <span className={`block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 mt-1 
                  ${isScrolled ? "bg-orange-400" : "bg-orange-200"}`}></span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-4 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow
                    bg-gradient-to-tr from-orange-400 to-[#7a0570] transition-transform duration-300 transform group-hover:scale-110">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-white via-purple-100 to-white bg-opacity-90 z-40 flex items-center justify-center">
          <ul
            ref={menuRef}
            className="bg-white rounded-lg shadow-lg w-full max-w-sm mx-4 p-8 flex flex-col items-center gap-8 text-xl font-semibold text-purple-700"
          >
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Contact", path: "/contact" },
              { name: "Login", path: "/login" },
              { name: "Sign Up", path: "/signup" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="block w-full text-center hover:text-orange-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}

            <li className="relative w-full text-center">
              <Link
                to="/cart"
                className="block hover:text-orange-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cart
                {cart.length > 0 && (
                  <span className="absolute -top-3 right-0 bg-gradient-to-tr from-orange-400 to-purple-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
