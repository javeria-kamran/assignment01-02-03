// src/pages/index.tsx
"use client";

import Head from 'next/head';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Define the Post interface directly in this file if not imported from a shared file
interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

const HomePage = () => {
  // Sample blog posts data
  const posts: Post[] = [
    {
      id: 1,
      title: "The Mysteries of Black Holes",
      excerpt: "An exploration into the enigmatic black holes...",
      content: `Black holes are regions of space where gravity is so strong that not even light can escape. 
      They are formed from the remnants of massive stars and have fascinated scientists for decades. 
      Let's delve deeper into their mysteries and understand how they shape the universe.`,
    },
    {
      id: 2,
      title: "Mars Missions: Past, Present, and Future",
      excerpt: "Discover the fascinating history of Mars missions...",
      content: `From the Viking missions to the Perseverance rover, humanity has shown its determination to explore the red planet. 
      This article covers the past, present, and future plans for Mars exploration, highlighting major missions and their discoveries.`,
    },
  ];

  return (
    <>
      <Head>
        <title>Space Explorer - Discover the Universe</title>
        <meta
          name="description"
          content="Explore planets, space missions, and technologies."
        />
        <meta name="author" content="Muqaddas Fatima" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Space Explorer - Discover the Universe" />
        <meta
          property="og:description"
          content="Explore planets, space missions, and technologies."
        />
        <meta property="og:image" content="/images/space-thumbnail.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <BlogSection posts={posts} /> {/* Pass posts as a prop to BlogSection */}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;



