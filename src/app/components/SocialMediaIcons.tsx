// src/components/SocialMediaIcons.tsx
import { motion } from 'framer-motion';

const SocialMediaIcons = () => (
  <div className="flex justify-center space-x-6 mt-6">
    <motion.a
      href="mailto:muqaddasfatima576@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="hover:text-blue-500"
    >
      <i className="fas fa-envelope"></i> Gmail
    </motion.a>
    <motion.a
      href="https://www.instagram.com/muqaddas_fatima25"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="hover:text-pink-500"
    >
      <i className="fab fa-instagram"></i> Instagram
    </motion.a>
    <motion.a
      href="https://www.linkedin.com/in/muqaddas-fatima-6aaa0a2b3"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="hover:text-blue-500"
    >
      <i className="fab fa-linkedin"></i> LinkedIn
    </motion.a>
    <motion.a
      href="https://github.com/muqaddasfatima576"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="hover:text-gray-500"
    >
      <i className="fab fa-github"></i> GitHub
    </motion.a>
  </div>
);

export default SocialMediaIcons;
