// src/components/BlogSection.tsx

// Define the Post interface here if it is only used in this component
interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

// Define the BlogSectionProps interface, using the Post interface
interface BlogSectionProps {
  posts: Post[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <div key={post.id} className="mb-8">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-lg mb-2">{post.excerpt}</p>
        <p className="mb-4">{post.content}</p>
      </div>
    ))}
  </div>
);

export default BlogSection;

