// src/utils/mdUtils.ts
import matter from 'gray-matter';
import { Post } from '../types';

// 파일명에서 날짜와 슬러그를 추출하는 함수
const parseFileName = (fileName: string) => {
  // ./YYYY-MM-DD-title.md -> ['YYYY-MM-DD', 'title']
  const match = fileName.match(/\.\/(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
  if (!match) return null;

  return {
    date: match[1],
    slug: match[2]
  };
};

// posts 디렉토리의 모든 .md 파일을 가져오기
const getMDFiles = () => {
  const context = require.context('../posts', false, /\.md$/);
  return context.keys().map(key => ({
    key,
    content: context(key) as string,
    ...parseFileName(key)!
  }));
};

export const getPostData = async (slug: string): Promise<Post | null> => {
  try {
    const files = getMDFiles();
    const file = files.find(f => f.slug === slug);
    
    if (!file) {
      throw new Error(`Post not found: ${slug}`);
    }

    const { data, content } = matter(file.content);
    
    return {
      slug,
      title: data.title,
      date: file.date,
      categories: data.categories,
      excerpt: data.excerpt,
      content
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return null;
  }
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const files = getMDFiles();
    const posts = files.map(file => {
      const { data, content } = matter(file.content);
      return {
        slug: file.slug,
        title: data.title,
        date: file.date,
        categories: data.categories,
        excerpt: data.excerpt,
        content
      };
    });

    // 날짜순 정렬
    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
};