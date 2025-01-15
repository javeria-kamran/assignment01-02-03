// src/app/missions/[missionId]/page.tsx
"use client";

import { useRouter } from 'next/router';

const MissionDetail = () => {
  const router = useRouter();
  const { missionId } = router.query;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Mission Details</h1>
      <p className="mt-4">Details about mission ID: {missionId}</p>
      {/* Add mission details dynamically here */}
    </div>
  );
};

export default MissionDetail;
