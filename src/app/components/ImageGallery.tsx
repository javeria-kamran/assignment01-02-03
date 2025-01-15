// src/components/ImageGallery.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: "/images/galaxy.jpg", alt: "Galaxy" },
  { src: "/images/nebula.jpg", alt: "Nebula" },
  { src: "/images/earth.jpg", alt: "Earth" },
];

const ImageGallery = () => (
  <div className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Image Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}          // Adjust as needed for your layout
            height={400}         // Adjust as needed for your layout
            layout="responsive"  // Makes the image responsive
            className="object-cover"
            priority={index === 0} // Optionally prioritize the first image for faster loading
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default ImageGallery;
