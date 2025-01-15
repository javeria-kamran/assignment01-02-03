// src/pages/blog.tsx
"use client";

import BlogList from '../components/BlogList';

// Sample blog posts
const posts = [
  {
    id: 1,
    title: "The Mysteries of Black Holes",
    excerpt: "An exploration into the enigmatic black holes...",
    date: "2024-10-25"
  },
  {
    id: 2,
    title: "Mars Colonization: The Next Step",
    excerpt: "What would it take to establish human life on Mars?",
    date: "2024-10-20"
  },
];

const BlogPage = () => (
  <div className="min-h-screen flex flex-col items-center bg-black text-white p-8">
    <h1 className="text-4xl font-bold mb-8">Blog</h1>
    <BlogList posts={posts} />
  </div>
);

export default BlogPage;
