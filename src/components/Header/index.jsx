import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { BsGrid } from "react-icons/bs";
import logo_white from "../../assets/image/logo_white.svg";
import logo_dark from "../../assets/image/logo_dark.svg";

import { useDarkMode } from "../../hooks/useDarkMode";

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff8a] dark:bg-[#1a1a1ab4] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 xl:px-0 py-8 dark:text-white">
        <a href="#">
          <img src={theme === "light" ? logo_white : logo_dark} alt="Christmas Logo"/>
        </a>
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-10">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Celebrate</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Gifts</a></li>
            <li><a href="#" className="hover:text-red-500 transition">New</a></li>
          </ul>
        </nav>
          <div className="flex items-center gap-5">
            <button onClick={toggleTheme} className="hover:scale-110 transition text-xl dark:text-white text-black">
              <FaRegMoon />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl dark:text-white text-black xl:hidden">
              {isOpen ? <FaXmark /> : <BsGrid />}
            </button>
          </div>
      </div>
      <div className={`xl:hidden fixed inset-0 bg-black/30 flex items-start justify-center p-5 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="relative w-full max-w-6xl bg-white dark:bg-[#1a1a1a] pt-20 pb-16 shadow-xl">
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-6 text-3xl text-black dark:text-white">
            <FaXmark />
          </button>
          <ul className="flex flex-col items-center gap-8 text-xl font-medium">
            <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Celebrate</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Gifts</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>New</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;