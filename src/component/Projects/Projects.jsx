import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import campusHub from "../../assets/ProjectsAssets/campusHub.png";
import portfolio from "../../assets/ProjectsAssets/portfolio.png";
import rhythmix from "../../assets/ProjectsAssets/rhythmix.png";
import snapSorter from "../../assets/ProjectsAssets/snapSorter.png";

const projects = [
  {
    title: "Campus Hub",
    image: campusHub,
    description:
      "A college management platform built for students and faculty with features like notices, resources, and academic utilities. Developed as my major final-year project.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/WhiruS-X07/Campus-Hub",
    live: "https://whirus.42web.io/",
  },
  {
    title: "Rhythmix",
    image: rhythmix,
    description:
      "A modern music player powered by the Jamendo API with search, favorites, queue management, shuffle, repeat, and a responsive streaming-inspired interface.",
    tech: ["JavaScript", "Tailwind CSS", "Jamendo API"],
    github: "https://github.com/WhiruS-X07/rhythmix",
    live: "https://whirus-x07.github.io/rhythmix/",
  },
  {
    title: "Developer Portfolio",
    image: portfolio,
    description:
      "My personal portfolio website showcasing my skills, projects, journey, and contact information with smooth animations, reusable components, and responsive design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/WhiruS-X07/whirus-portfolio",
    live: "https://whirus-portfolio.netlify.app/",
  },
  {
    title: "SnapSorter",
    image: snapSorter,
    description:
      "A browser-based image reviewing and sorting utility designed for fast workflows with folder access, keyboard shortcuts, drag-and-drop support, and local saving.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/WhiruS-X07/Snap-Sorter",
    live: "https://whirus-x07.github.io/Snap-Sorter/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects that reflect my learning, creativity,
            problem-solving, and development journey.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                p-6 rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-md transition-all duration-300
                hover:border-purple-500/40 hover:scale-[1.02]
                hover:shadow-lg hover:shadow-purple-500/20
                flex flex-col h-full
              "
            >
              {/* Logo + Title */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full border-1 border-purple-500
              shadow-lg shadow-purple-500/20
              transition-transform duration-300 hover:scale-105"
                />

                <h2 className="text-xl sm:text-2xl font-bold text-purple-400">
                  {project.title}
                </h2>
                
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1 text-xs sm:text-sm rounded-full
                      bg-purple-500/10 border border-purple-500/20
                      text-purple-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2 px-4 py-3 rounded-lg
                    border border-white/10 text-gray-300
                    hover:border-purple-500 hover:text-purple-400
                    transition-all duration-300 w-full sm:w-auto
                  "
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2 px-4 py-3 rounded-lg
                    bg-gradient-to-r from-purple-600 to-indigo-600
                    hover:scale-105 transition-all duration-300
                    w-full sm:w-auto
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
