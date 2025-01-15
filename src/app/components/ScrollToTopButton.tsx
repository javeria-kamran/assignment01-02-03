// src/components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="scroll-top-btn bg-blue-500 hover:bg-blue-700 text-white fixed bottom-4 right-4 p-2 rounded-full shadow-lg transition duration-300"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;


