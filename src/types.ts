export interface Post {
    slug: string;
    title: string;
    date: string;
    categories: string[];
    excerpt: string;
    content?: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    demoUrl?: string;
  }