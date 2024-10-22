import React, { useState, useEffect } from 'react';
import PostList from '../components/Blog/PostList';
import { Post } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // 여기서 posts를 불러옵니다
    // 실제로는 API 호출이나 정적 파일을 불러오는 로직이 들어갑니다
    const fetchPosts = async () => {
      // 임시 데이터
      const samplePosts: Post[] = [
        {
          slug: 'first-post',
          title: 'My First Blog Post',
          date: '2024-02-20',
          categories: ['React', 'TypeScript'],
          excerpt: 'This is my first blog post...'
        },
        // 더 많은 포스트...
      ];
      
      setPosts(samplePosts);
      
      // 카테고리 추출
      const allCategories = Array.from(
        new Set(samplePosts.flatMap(post => post.categories))
      );
      setCategories(allCategories);
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      <div className="mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded ${
              !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <PostList posts={posts} category={selectedCategory} />
    </div>
  );
};

export default Blog;