import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "/C.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Feature", "Pricing", "About", "Contact Us"];

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:grid w-full h-auto grid-cols-2 items-center px-8 py-6">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <img src={Logo} alt="Cold-Start" className="h-12" />
        </div>

        {/* Right: Menu + Buttons */}
        <div className="flex items-center justify-end gap-10">
          {/* Menu */}
          <ul className="flex items-center gap-12 text-base font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-gray-600 font-thin"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-white border border-black text-black px-4 py-2 rounded-md text-sm font-light">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-light">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden w-full h-16 flex justify-between items-center px-4 shadow relative">
        {/* Logo */}
        <div className="flex justify-start">
          <img src={Logo} alt="Cold-Start" className="h-12" />
        </div>

        {/* Menu Drawer */}
        <div
          className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-black text-white shadow-md px-6 py-6 transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Items */}
          <ul className="flex flex-col gap-6 font-medium justify-center items-center flex-grow mt-16 text-xl">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer hover:text-gray-400 font-thin"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-white border border-black text-black px-4 py-2 rounded-md w-full text-lg">
              Login
            </button>
            <button className="bg-black border border-white text-white px-4 py-2 rounded-md w-full text-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={handleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="text-3xl bg-black text-white p-2 rounded-md relative z-50"
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
