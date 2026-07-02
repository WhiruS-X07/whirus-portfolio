import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 text-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Intro */}
        <div className="text-center mb-14 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-purple-400">Skills</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Technologies and tools I’ve learned and used while building projects
            and improving my development journey.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-14 sm:space-y-20">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-purple-400 text-center lg:text-left">
                {category.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="
                      p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10
                      backdrop-blur-md flex flex-col items-center justify-center
                      gap-3 sm:gap-4 transition-all duration-300
                      hover:border-purple-500/40 hover:scale-105
                      hover:shadow-lg hover:shadow-purple-500/20
                    "
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />

                    <p className="text-gray-300 text-sm sm:text-base font-medium text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus */}
        <div className="mt-20 sm:mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center lg:text-left">
            Current <span className="text-purple-400">Focus</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "React.js",
              "UI/UX Design",
              "Backend Fundamentals",
              "API Integrations",
            ].map((focus, index) => (
              <div
                key={index}
                className="
                  p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10
                  backdrop-blur-md text-center transition-all duration-300
                  hover:border-purple-500/40 hover:scale-105
                "
              >
                <p className="text-gray-300 text-sm sm:text-base font-semibold">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;