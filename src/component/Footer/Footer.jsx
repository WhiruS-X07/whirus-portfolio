import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 flex flex-col items-center gap-8">

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-8 text-gray-300 text-sm sm:text-base">

          {/* GitHub */}
          <a
            href="https://github.com/WhiruS-X07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/whirus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:piyush1672003@gmail.com"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <FaEnvelope size={18} />
            Email
          </a>

          {/* Phone */}
          <a
            href="tel:+918800904044"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <FaPhone size={18} />
            Phone
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <FaFileAlt size={18} />
            Resume
          </a>
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="
            w-full sm:w-auto
            text-center
            px-6 py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-purple-600 to-indigo-600
            transition-all duration-300 ease-in-out
            hover:from-purple-500 hover:to-indigo-500
            hover:shadow-lg hover:shadow-purple-500/30
            hover:scale-105
          "
        >
          Contact Me
        </Link>

        {/* Bottom Text */}
        <div className="text-xs sm:text-sm text-gray-500 text-center space-y-1">
          <p>© 2026 Piyush (WhiruS). All rights reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;