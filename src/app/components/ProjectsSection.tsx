// src/components/ProjectsSection.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Moon Landing Mission',
    description: 'A historic mission to explore the lunar surface and bring back samples.',
    image: '/images/moon-landing.jpg', // Ensure this image exists in the public/images folder
  },
  {
    title: 'Satellite Orbiting Earth',
    description: 'A mission to monitor Earth’s atmosphere and collect important data.',
    image: '/images/satellite-earth.jpg', // Ensure this image exists in the public/images folder
  },
  {
    title: 'Mars Rover Expedition',
    description: 'Exploring the surface of Mars to discover signs of life.',
    image: '/images/mars-rover.jpg', // Ensure this image exists in the public/images folder
  },
  {
    title: 'Black Hole Exploration',
    description: 'Studying the mysteries of black holes and their impact on space.',
    image: '/images/black-hole.jpg', // Ensure this image exists in the public/images folder
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Space Missions</h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          Discover the most exciting missions and projects that explore the wonders of the cosmos.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-black shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;






