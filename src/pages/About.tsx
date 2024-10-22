// src/pages/About.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaServer, FaDatabase, FaBrain, FaCode } from 'react-icons/fa';
import { SiApachekafka, SiPython, SiJavascript, SiTypescript, SiReact, SiSpring, SiDocker, SiKubernetes } from 'react-icons/si';

const About: React.FC = () => {
  const skills = {
    backend: ['Java', 'Spring Boot', 'Node.js', 'Express', 'RESTful APIs'],
    dataEngineering: ['Apache Kafka', 'Apache Spark', 'Hadoop', 'ETL Pipeline', 'Data Warehouse'],
    ai: ['Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis', 'Statistical Analysis'],
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    devOps: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Monitoring']
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 overflow-hidden rounded-full">
            <img
              src="/images/profile.jpg"
              alt="Seong Hoon Ryu"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Seong Hoon Ryu</h1>
            <p className="text-xl text-gray-600 mb-4">
              Backend Developer | Data Engineer | AI Enthusiast
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rsh1994"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Backend 개발과 Data Engineering을 주력으로 하며, AI 분야로 영역을 확장하고 있는 개발자입니다. 
            대규모 데이터 처리와 시스템 아키텍처 설계에 깊은 관심을 가지고 있으며, 
            최신 기술 트렌드를 따라가며 지속적으로 학습하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            현재는 데이터 파이프라인 구축과 AI 시스템 통합에 초점을 맞추고 있으며, 
            풀스택 개발 경험을 바탕으로 더 효율적인 시스템 구축을 위해 노력하고 있습니다.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaServer className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaDatabase className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold">Data Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.dataEngineering.map(skill => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaBrain className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.ai.map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-red-600" size={24} />
              <h3 className="text-xl font-semibold">Frontend & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...skills.frontend, ...skills.devOps].map(skill => (
                <span key={skill} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          <SiPython className="w-12 h-12 text-blue-500" />
          <SiJavascript className="w-12 h-12 text-yellow-500" />
          <SiTypescript className="w-12 h-12 text-blue-600" />
          <SiReact className="w-12 h-12 text-cyan-500" />
          <SiSpring className="w-12 h-12 text-green-500" />
          <SiApachekafka className="w-12 h-12 text-red-500" />
          <SiDocker className="w-12 h-12 text-blue-500" />
          <SiKubernetes className="w-12 h-12 text-blue-600" />
        </div>
      </section>
    </div>
  );
};

export default About;