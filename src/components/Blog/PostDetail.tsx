// src/components/Blog/PostDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Post } from '../../types';
import { getPostData } from '../../utils/mdUtils';

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const postData = await getPostData(slug);
        setPost(postData);
      }
    };

    loadPost();
  }, [slug]);

  if (!post) {
    return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-500 text-sm mb-8">
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
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostDetail;