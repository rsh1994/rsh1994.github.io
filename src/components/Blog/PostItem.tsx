import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow">
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold hover:text-blue-600 mb-2">
          {post.title}
        </h2>
      </Link>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <time>{new Date(post.date).toLocaleDateString()}</time>
        <span className="mx-2">•</span>
        <div className="flex space-x-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="bg-gray-100 px-2 py-1 rounded"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-600 hover:underline"
      >
        Read more →
      </Link>
    </article>
  );
};

export default PostItem;