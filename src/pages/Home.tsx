// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* 왼쪽: 메인 텍스트 */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Just Write
              <br />
              Development.
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              개발 여정과 기술적 인사이트를 기록합니다.
            </p>
            <Link
              to="/blog"
              className="inline-block px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Blog
            </Link>
          </div>

          {/* 오른쪽: 데코레이션 */}
          <div className="hidden md:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-1">
              <div className="h-full w-full rounded-xl bg-gray-900/50 backdrop-blur flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;