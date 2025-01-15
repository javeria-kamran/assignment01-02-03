// src/components/Sidebar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-blue-500 p-2 rounded-md text-white md:hidden"
      >
        ☰
      </button>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-md transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white absolute top-4 right-4 text-xl"
        >
          ✕
        </button>
        <ul className="p-8 space-y-4 text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/details">Details</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

