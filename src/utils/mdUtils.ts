// src/utils/mdUtils.ts
import matter from 'gray-matter';
import { Post } from '../types';

// 파일명에서 날짜와 슬러그를 추출하는 함수
const parseFileName = (fileName: string) => {
  // 2024-10-22-first.md -> ['2024-10-22', 'first']
  const match = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
  if (!match) return null;

  return {
    date: match[1],
    slug: match[2]
  };
};

const getPosts = async () => {
  // 파일 시스템에서 posts 디렉토리의 모든 .md 파일 가져오기
  const files = require.context('../posts', false, /\.md$/);
  const postsData: { [key: string]: any } = {};

  files.keys().forEach((key) => {
    const fileName = key.replace(/^\.\//, '');
    const fileInfo = parseFileName(fileName);
    if (fileInfo) {
      postsData[fileInfo.slug] = {
        content: files(key).default,
        date: fileInfo.date
      };
    }
  });

  return postsData;
};

export const getPostData = async (slug: string): Promise<Post | null> => {
  try {
    const posts = await getPosts();
    const postData = posts[slug];
    
    if (!postData) {
      throw new Error(`Post not found: ${slug}`);
    }

    const { data, content } = matter(postData.content);
    
    return {
      slug,
      title: data.title,
      date: postData.date, // 파일명의 날짜 사용
      categories: data.categories,
      excerpt: data.excerpt,
      content: content
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return null;
  }
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const posts = await getPosts();
    const allPosts: Post[] = [];

    for (const [slug, data] of Object.entries(posts)) {
      const { data: frontMatter, content } = matter(data.content);
      allPosts.push({
        slug,
        title: frontMatter.title,
        date: data.date, // 파일명의 날짜 사용
        categories: frontMatter.categories,
        excerpt: frontMatter.excerpt,
        content
      });
    }

    // 날짜순 정렬
    return allPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
};