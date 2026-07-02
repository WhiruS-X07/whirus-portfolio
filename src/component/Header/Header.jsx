import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 transition-colors duration-300 ${
      isActive
        ? "text-purple-400 font-bold"
        : "text-white hover:text-purple-400"
    }`;

  return (
    <nav className="w-full h-20 bg-[#111827]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 sm:h-20 md:h-24 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 items-center font-bold">
          <li>
            <NavLink to="/" className={navClass}>
              <FaHome size={16} />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navClass}>
              <FaUser size={16} />
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={navClass}>
              <FaCode size={16} />
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={navClass}>
              <FaFolderOpen size={16} />
              Projects
            </NavLink>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-white
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     transition-all duration-300 ease-in-out
                     hover:from-purple-500 hover:to-indigo-500
                     hover:shadow-lg hover:shadow-purple-500/30
                     hover:scale-105"
        >
          <FaEnvelope size={16} />
          Contact Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-[#111827] transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-bold">
          <li>
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <FaHome size={16} />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <FaUser size={16} />
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <FaCode size={16} />
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              <FaFolderOpen size={16} />
              Projects
            </NavLink>
          </li>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-white
                       bg-gradient-to-r from-purple-600 to-indigo-600
                       transition-all duration-300 hover:scale-105"
          >
            <FaEnvelope size={16} />
            Contact Me
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;