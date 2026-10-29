import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <footer
      className={`bg-black text-white px-6 py-10 
        transition-opacity duration-1000 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
          <img
            src="/Free.png"
            alt="YourBrand Logo"
            className="w-20 h-16 mb-3 mx-auto md:mx-0 shadow-lg bg-white object-contain"
          />
          <p className="text-gray-300">
            Delivering quality and innovation for over 10 years.
          </p>
        </div>

        {/* Links */}
        {/* <nav className="flex flex-col sm:flex-row gap-6 text-lg font-semibold text-gray-200">
          {["Home", "Shop", "About", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-orange-500 transition-all duration-300"></span>
            </a>
          ))}
        </nav>  */}

        {/* Socials with Icons */}
        {/* <div className="flex gap-6 text-2xl text-white">
          <a href="https://www.facebook.com/4levelop1" aria-label="Facebook" target="_blank" className="hover:text-blue-500 hover:scale-110 transition-transform">
            <Facebook />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400 hover:scale-110 transition-transform">
            <Twitter />
          </a>
          <a href="https://www.instagram.com/sumit_yadav.jiii?igsh=MTVvNmJuN2N4Yzl0YQ==" target="_blank" aria-label="Instagram" className="hover:text-pink-500 hover:scale-110 transition-transform">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/sumit-kumar-yadav-035372243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn" className="hover:text-blue-300 hover:scale-110 transition-transform">
            <Linkedin />
          </a>
        </div> */}
      </div>

      <p className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ankit Kumar . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
