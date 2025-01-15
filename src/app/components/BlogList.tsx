// src/components/BlogList.tsx
"use client";

import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const BlogList = ({ posts }: { posts: BlogPost[] }) => (
  <div className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Latest Blog Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">{post.title}</h3>
          <p className="text-gray-400 mt-2">{post.excerpt}</p>
          <p className="text-gray-500 mt-1">{post.date}</p>
          <Link href={`/blog/${post.id}`}>
            <a className="text-blue-500 hover:underline mt-4 block">Read More</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default BlogList;

