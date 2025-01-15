// src/pages/about.tsx
"use client";

const AboutPage = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Space Explorer</h1>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center mb-4">
      Welcome to <strong>Space Explorer</strong>, we believe that the universe is full of wonders waiting to be discovered. Our mission is to bring the mysteries of space, planets, and technology to your screen in a way that is engaging, informative, and accessible. We aim to inspire curiosity and a love for science in every individual who visits our platform.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center mb-4">
      Started by a team of space enthusiasts and tech experts, Space Explorer was built to create a digital gateway to the cosmos. We work with leading scientists, astronomers, and innovators to deliver accurate and fascinating insights about celestial phenomena, space missions, and emerging space technologies.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center mb-4">
      Our goal is simple: to ignite your imagination and provide a virtual window into the vast and beautiful universe. Whether you’re an aspiring astronaut, a seasoned space enthusiast, or someone curious about the cosmos, <strong>Space Explorer</strong> is your home for all things space. Explore with us, and let’s unravel the mysteries of the universe, one discovery at a time.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center mb-8">
      We also want to hear from you! Feel free to <a href="/contact" className="text-blue-500 hover:underline">get in touch</a> with any questions, collaborations, or ideas. The universe is vast, but together, we can explore its wonders.
    </p>

    {/* Author Information Section */}
    <h2 className="text-3xl font-bold mb-4">About the Author</h2>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center mb-4">
      My name is <strong>Muqaddas Fatima</strong>, the creator behind <strong>Space Explorer</strong>. I am a passionate space enthusiast, developer, and digital creator with a mission to bring the wonders of the universe to everyone. My love for space and technology drives me to explore new ways to make complex scientific topics accessible and engaging for all.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center mb-4">
      I have a background in tech development and have worked on several projects that merge my passion for science with modern digital tools. I believe that space is not just about exploration—it's about inspiration and a collective journey into the unknown.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl text-center">
      When I'm not working on <strong>Space Explorer</strong>, you’ll find me reading about space missions, experimenting with new tech tools, or sharing insights with the space-loving community on social media. Connect with me on <a href="https://www.linkedin.com/in/muqaddas-fatima-6aaa0a2b3" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>, follow my updates on <a href="https://www.instagram.com/muqaddas_fatima25" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>, or check out my code and projects on <a href="https://github.com/muqaddasfatima576" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
    </p>
  </div>
);

export default AboutPage;





