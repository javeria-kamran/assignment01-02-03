// src/components/AnimatedImage.tsx
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="rounded-md shadow-lg"
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ duration: 0.3 }}
  />
);

export default AnimatedImage;
