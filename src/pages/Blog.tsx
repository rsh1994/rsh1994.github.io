// src/pages/Blog.tsx
import React, { useEffect, useState } from 'react';
import PostList from '../components/Blog/PostList';
import { Post } from '../types';
import { getAllPosts } from '../utils/mdUtils';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    loadPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Blog;