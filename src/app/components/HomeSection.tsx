"use client"
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-white"
      >
        Welcome to My Design Website
      </motion.h1>
    </section>
  );
};

export default HomeSection;
