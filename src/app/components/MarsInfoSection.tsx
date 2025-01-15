// src/components/MarsInfoSection.tsx
"use client";

import { motion } from 'framer-motion';

const MarsInfoSection = () => {
  return (
    <motion.section
      className="py-16 px-8 bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-purple-400 text-center">About Mars</h2>
        <p className="text-lg text-gray-300 text-center">
          Mars is the fourth planet from the Sun and the second-smallest planet in the solar system, being larger than only Mercury. 
          Known as the "Red Planet" due to its reddish appearance, Mars has been a focal point for space exploration due to its potential for human habitation.
        </p>
      </div>
    </motion.section>
  );
};

export default MarsInfoSection;
