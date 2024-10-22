// src/pages/Blog.tsx
import React, { useEffect, useState, useMemo } from 'react';
import PostList from '../components/Blog/PostList';
import { Post } from '../types';
import { getAllPosts } from '../utils/mdUtils';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 카테고리별 포스트 수를 계산하고 정렬
  const categories = useMemo(() => {
    const categoryCount: { [key: string]: number } = {};
    
    posts.forEach(post => {
      post.categories.forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });
    });

    // 카테고리를 포스트 수에 따라 내림차순 정렬
    return Object.entries(categoryCount)
      .sort(([, a], [, b]) => b - a)
      .map(([category, count]) => ({
        name: category,
        count
      }));
  }, [posts]);

  // 선택된 카테고리에 따라 포스트 필터링
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter(post => 
      post.categories.includes(selectedCategory)
    );
  }, [posts, selectedCategory]);

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    loadPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-8">Blog Posts</h1> */}
      <div className="flex gap-8">
        {/* 사이드바 */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left px-2 py-1 rounded ${
                  !selectedCategory 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                All Posts ({posts.length})
              </button>
              {categories.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() => setSelectedCategory(name)}
                  className={`w-full text-left px-2 py-1 rounded flex justify-between items-center ${
                    selectedCategory === name 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span>{name}</span>
                  <span className="text-sm text-gray-500">({count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* 메인 컨텐츠 */}
        <div className="flex-1">
          <div className="mb-4">
            {selectedCategory && (
              <div className="flex items-center mb-4">
                <span className="text-gray-600">
                  Showing posts in category:
                </span>
                <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {selectedCategory}
                </span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
          <PostList posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
};

export default Blog;