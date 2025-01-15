// src/components/ExampleComponent.tsx
"use client";

import Image from 'next/image';

const ExampleComponent = () => (
  <div className="flex justify-center items-center min-h-screen bg-black p-8">
    <Image
      src="/images/planet.jpg"
      alt="A beautiful planet"
      width={600}
      height={400}
      quality={80}
      priority
      className="rounded-lg shadow-lg"
    />
  </div>
);

export default ExampleComponent;

