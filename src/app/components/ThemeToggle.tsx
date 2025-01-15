// src/components/ThemeToggle.tsx
"use client";

import { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 text-white rounded-md focus:outline-none hover:bg-gray-600"
      aria-label="Toggle dark/light mode"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;


