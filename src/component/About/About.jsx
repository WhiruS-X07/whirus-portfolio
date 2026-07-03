import React from "react";
import profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16 mb-20">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] object-cover rounded-2xl border border-purple-500 shadow-lg shadow-purple-500/20 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Intro Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-purple-400">Piyush Kumar (WhiruS)</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
              A web developer passionate about building practical, interactive,
              and user-friendly applications.
            </p>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              Currently focused on React and modern frontend development while
              continuously improving backend skills to grow into a full-stack
              developer.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Bachelor of Computer Applications
              </h3>
              <p className="text-gray-300">
                Indira Gandhi National Open University
              </p>
              <p className="text-gray-400">2022 - 2025</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Senior Secondary Education
              </h3>
              <p className="text-gray-300">
                Government Sarvodaya Bal Vidyalaya
              </p>
              <p className="text-gray-400">2020 - 2022</p>
            </div>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Skills & Interests
          </h2>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            My core skills include HTML, CSS, JavaScript, Tailwind CSS,
            Bootstrap, PHP, MySQL, Git, GitHub, and currently React.js.
            Alongside coding, I also enjoy UI design and have experience with
            tools like Photoshop and Figma.
          </p>
        </div>

        {/* Journey */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            My <span className="text-purple-400">Journey</span>
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>
              My coding journey started in school with Python, where I found my
              interest in logic and problem-solving.
            </p>

            <p>
              Later, I explored C and C++ to strengthen my programming basics
              before moving into web development with HTML, CSS, and JavaScript.
            </p>

            <p>
              While working on my final-year project, I learned PHP and MySQL to
              build a complete web-based school management system called
              <span className="text-purple-400"> Campus Hub</span>.
            </p>

            <p>
              After that, I focused heavily on frontend and built projects like
              <span className="text-purple-400"> Rhythmix</span> and
              <span className="text-purple-400"> SnapSorter</span>, improving my
              UI, responsiveness, and problem-solving skills.
            </p>
          </div>
        </div>

        {/* Beyond Coding */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Beyond Coding</h2>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Outside coding, I enjoy watching anime, reading manga, and playing
            story-driven games. These hobbies keep me creative and often inspire
            how I think about storytelling, design, and user experiences.
          </p>
        </div>

        {/* Current Goal */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Current Goal</h2>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Right now, I’m focused on learning React deeply while gradually
            moving towards the MERN stack. My goal is to strengthen both
            frontend and backend development, build scalable full-stack
            applications, and keep improving through real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
