// src/components/BlogCard.tsx
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, imageSrc }) => (
  <motion.div
    className="bg-gray-800 p-4 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)" }}
    transition={{ duration: 0.3 }}
  >
    <img src={imageSrc} alt={title} className="rounded-md mb-4 w-full h-40 object-cover" />
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{excerpt}</p>
  </motion.div>
);

export default BlogCard;
