// src/components/AnimatedBanner.tsx
"use client";

import { motion } from 'framer-motion';

const AnimatedBanner = () => (
  <motion.div
    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <h1 className="text-3xl font-bold">Welcome to Space Explorer!</h1>
    <p className="text-lg">Discover the universe and beyond.</p>
  </motion.div>
);

export default AnimatedBanner;
