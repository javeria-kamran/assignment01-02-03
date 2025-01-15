// src/pages/blog/page.tsx
"use client";

import BlogSection from '../components/BlogSection';

// Define the Post interface directly in this file
interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

const BlogPage = () => {
  // Define the posts array with an explicit type of Post[]
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
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <BlogSection posts={posts} /> {/* Make sure BlogSection is typed to accept posts */}
    </div>
  );
};

export default BlogPage;
