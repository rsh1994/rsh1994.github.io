import React from 'react';
import ProjectCard from '../components/Portfolio/ProjectCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application built with React and TypeScript.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      imageUrl: '/project1.jpg',
      githubUrl: 'https://github.com/username/project1',
      demoUrl: 'https://project1.demo.com'
    },
    // 더 많은 프로젝트...
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;