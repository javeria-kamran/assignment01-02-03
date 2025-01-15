// src/components/AnimatedButton.tsx
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-md transition duration-300"
  >
    {text}
  </motion.button>
);

export default AnimatedButton;


