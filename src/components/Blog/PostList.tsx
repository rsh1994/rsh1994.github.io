// src/components/Blog/PostList.tsx
import React from 'react';
import PostItem from './PostItem';
import { Post } from '../../types';

interface PostListProps {
  posts: Post[];
  category?: string;
}

const PostList: React.FC<PostListProps> = ({ posts, category }) => {
  const filteredPosts = category
    ? posts.filter(post => post.categories.includes(category))
    : posts;

  return (
    <div className="space-y-8">
      {filteredPosts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;