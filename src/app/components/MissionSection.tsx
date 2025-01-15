// src/components/MissionsSection.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const missions = [
  {
    id: 1,
    title: "Space Mission",
    description: "An astronaut working outside a spacecraft, exploring the wonders of space.",
    image: "/images/space-mission.jpg", // Make sure this image exists in public/images
  },
  {
    id: 3,
    title: "Mars Rover Mission",
    description: "Exploring the surface of Mars and searching for signs of life.",
    image: "/images/mars-rover.jpg", // Ensure this path is correct
  },
  {
    id: 4,
    title: "Voyager 1",
    description: "The farthest spacecraft from Earth, exploring the outer reaches of the solar system.",
    image: "/images/voyager.jpg", // Ensure this path is correct
  },
];

const MissionsSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">
        Space Missions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {missions.map((mission) => (
          <motion.div
            key={mission.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={mission.image}
              alt={mission.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <motion.h3
              className="text-xl lg:text-2xl font-bold mb-2"
              style={{
                textShadow: "0 0 5px rgba(255, 255, 255, 0.7)",
              }}
            >
              {mission.title}
            </motion.h3>
            <p className="text-gray-300 text-sm md:text-base">{mission.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MissionsSection;







