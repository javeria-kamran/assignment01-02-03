// src/app/pages/missions.tsx
import InfoSection from '../components/InfoSection';

const missions = [
  {
    imageSrc: "/images/space-mission.jpg",
    altText: "Space Mission Image",
    title: "Space Missions: Past, Present, and Future",
    description:
      "From satellites to manned missions, space exploration has been at the forefront of technological advancement. This section highlights significant milestones in the history of space missions, focusing on the technology and human courage that made it possible.",
    year: "2024",
    role: "Exploration Specialist",
  },
  // Add more mission objects as needed
];

const MissionsPage = () => {
  return (
    <div className="bg-black min-h-screen">
      {missions.map((mission, index) => (
        <InfoSection key={index} {...mission} />
      ))}
    </div>
  );
};

export default MissionsPage;
