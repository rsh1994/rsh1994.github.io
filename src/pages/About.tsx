// src/pages/About.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { 
  SiPython, SiApachekafka, SiApachespark, SiGooglecloud, 
  SiAmazon, SiDocker, SiDjango, SiReact,
  SiTensorflow, SiFastapi, SiAmazonwebservices, SiMysql, 
} from 'react-icons/si';

const About: React.FC = () => {
    const experience = {
        dataEngineering: [
          'BigQuery', 
          'Airflow',  
          'ETL Pipeline',
          'Data Warehouse',
          'MySQL',
          'PostgreSQL'
        ],
        backend: [
          'Django', 
          'REST API', 
          'Spring Boot', 
          'GraphQL',
          'DynamoDB'
        ],
        cloudInfra: [
          'GCP',
          'AWS', 
          'Docker', 
        //   'CI/CD',
          'MSA'
        ],
        ai: [
          'ChromaDB',
          'Vector Search',
          'NLP',
          'Sentence-Transformers'
        ]
      };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 overflow-hidden rounded-full">
            <img
              src="/images/profile.png"
              alt="Seong Hoon Ryu"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Seong Hoon Ryu</h1>
            <p className="text-xl text-gray-600 mb-4">
              Data Engineer & Backend Developer
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/rsh1994" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="mailto:rsh1994@naver.com">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            데이터 엔지니어링과 백엔드 개발을 중심으로 활동하고 있으며, 효율적인 데이터 파이프라인 구축과 
            시스템 최적화에 깊은 관심을 가지고 있습니다.
            50여개 고객사의 데이터 처리 시스템을 구축하고 관리한 경험을 바탕으로, 안정적이고 확장 가능한 시스템 설계에 전문성을 보유하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            최근에는 벡터 데이터베이스와 NLP 기술을 활용한 시멘틱 검색 시스템을 개발하며, 
            새로운 기술 도입과 시스템 아키텍처 설계에도 도전하고 있습니다.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">서강대학교</h3>
            <p className="text-gray-600">수학과(주전공) / 컴퓨터공학과(복수전공) 학사</p>
            <p className="text-gray-500">2013.03 ~ 2020.10</p>
          </div>
        </div>
      </section>

      {/* Skills */}
    {/* Skills Section */}
        <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Engineering */}
            <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <SiApachekafka className="text-red-500" />
                <h3 className="text-xl font-semibold">Data Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.dataEngineering.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* Backend Development */}
            <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <SiDjango className="text-green-500" />
                <h3 className="text-xl font-semibold">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.backend.map(skill => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <SiGooglecloud className="text-orange-500" />
                <h3 className="text-xl font-semibold">Cloud & Infrastructure</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.cloudInfra.map(skill => (
                <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* AI & ML */}
            <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <SiTensorflow className="text-orange-600" />
                <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.ai.map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {skill}
                </span>
                ))}
            </div>
            </div>
        </div>
        </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 bg-white rounded-lg shadow-lg p-6">
        <SiPython className="w-10 h-10 text-blue-500" title="Python"/>
        <SiDjango className="w-10 h-10 text-green-600" title="Django"/>
        <SiMysql className="w-10 h-10 text-blue-600" title="MySQL"/>
        <SiGooglecloud className="w-10 h-10 text-blue-600" title="Google Cloud Platform"/>
        <SiAmazon className="w-10 h-10 text-orange-500" title="Amazon Web Services"/>
        <SiDocker className="w-10 h-10 text-blue-500" title="Docker"/>
        <SiReact className="w-10 h-10 text-cyan-400" title="React"/>
        </div>
      </section>
    </div>
  );
};

export default About;