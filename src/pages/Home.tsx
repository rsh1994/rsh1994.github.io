import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to My Tech Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I write about web development, programming, and technology.
        </p>
        <Link
          to="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Read My Blog
        </Link>
      </section>
    </div>
  );
};

export default Home;