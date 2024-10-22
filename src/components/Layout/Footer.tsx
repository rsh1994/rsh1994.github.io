import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // 아이콘 추가를 위한 import

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {currentYear} <span className="font-semibold">Seong Hoon Ryu</span>
              <span className="mx-2">|</span>
              <span className="text-sm">Built with React & TypeScript</span>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/rsh1994"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email Contact"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rsh1994"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          This blog is open source. View the{' '}
          <a
            href="https://github.com/rsh1994/rsh1994.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            source code
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;