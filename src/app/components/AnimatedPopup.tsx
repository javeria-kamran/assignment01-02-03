// src/components/AnimatedPopup.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <motion.div
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <p>This is an animated popup! 🚀</p>
        <button
          className="mt-2 text-blue-400 hover:underline"
          onClick={handleClose}
        >
          Close
        </button>
      </motion.div>
    )
  );
};

export default AnimatedPopup;
