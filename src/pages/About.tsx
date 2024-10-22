import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="bg-white rounded-lg shadow p-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Your Name</h2>
        <p className="text-gray-600 mb-6">
          I'm a software developer passionate about web development and new technologies.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js'].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-3 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mt-6">Contact</h3>
          <div className="space-y-2">
            <p>Email: your.email@example.com</p>
            <p>GitHub: github.com/username</p>
            <p>LinkedIn: linkedin.com/in/username</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;