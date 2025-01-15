// src/components/Footer.tsx
"use client";

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 py-8 text-center text-white mt-8">
    <div className="container mx-auto">
      <p className="text-gray-400">
        &copy; 2025 Space Explorer. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="#"
          className="hover:text-blue-500"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="hover:text-blue-500"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="#"
          className="hover:text-blue-500"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

