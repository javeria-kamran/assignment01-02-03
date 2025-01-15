// src/components/HeroSection.tsx
"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/missions');
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: 'url(/images/space-background.jpg)' }}
    >
      <motion.div
        className="z-20 max-w-xl text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Explore the Universe
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          Discover planets, missions, and technologies beyond Earth.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300"
          onClick={handleButtonClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
