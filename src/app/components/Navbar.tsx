// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <img
            src="/images/MF-logo.png" // Make sure the logo is in public/images folder
            alt="Logo"
           width={40}
        height={40}
        className="rounded-full"
          />
          <span>Space Explorer</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white block md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative bg-black md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/missions" className="hover:text-blue-400">
            Missions
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
