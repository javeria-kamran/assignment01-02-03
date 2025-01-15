// src/pages/about.tsx
"use client";

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      className="container mx-auto py-16 px-4 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-blue-400">About Space Explorer</h1>
      <p className="text-lg mb-4">
        Space Explorer is a platform dedicated to exploring the vast universe through detailed information about space missions, celestial bodies, and cosmic phenomena. Our goal is to bring the wonders of space closer to enthusiasts and learners.
      </p>
      <h2 className="text-3xl font-bold mb-4 text-blue-400">About the Creator</h2>
      <p className="text-lg">
        This website is created by <strong>Muqaddas Fatima</strong>. I am passionate about space exploration and technology, and I aim to share knowledge and engage with other space enthusiasts. 
        Feel free to connect with me on <a href="https://www.linkedin.com/in/muqaddas-fatima-6aaa0a2b3" className="text-blue-500 hover:text-blue-700">LinkedIn</a> or <a href="https://github.com/muqaddasfatima576" className="text-blue-500 hover:text-blue-700">GitHub</a>.
      </p>
    </motion.div>
  );
};

export default AboutPage;





  