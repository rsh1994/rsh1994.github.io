// src/utils/mdUtils.ts
import matter from 'gray-matter';
import { Post } from '../types';

// 임시로 posts 목록을 하드코딩
const postFilenames = [
  'first-post.md',
  'second-post.md',
  // 추가되는 포스트 파일명들...
];

export const getPostData = async (slug: string): Promise<Post | null> => {
  try {
    const markdown = await import(`../posts/${slug}.md`);
    const { data, content } = matter(markdown.default);
    
    return {
      slug,
      title: data.title,
      date: data.date,
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
  const posts: Post[] = [];

  for (const filename of postFilenames) {
    const slug = filename.replace(/\.md$/, '');
    const post = await getPostData(slug);
    if (post) {
      posts.push(post);
    }
  }

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};