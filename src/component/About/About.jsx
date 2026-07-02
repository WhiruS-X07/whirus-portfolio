import React from "react";
import profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 text-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16 mb-16 sm:mb-20">

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="
                w-56 h-56
                sm:w-72 sm:h-72
                md:w-80 md:h-80
                lg:w-[26rem] lg:h-[26rem]
                object-cover rounded-2xl border border-purple-500
                shadow-lg shadow-purple-500/20
                transition-transform duration-300 hover:scale-105
              "
            />
          </div>

          {/* Intro Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-purple-400">Piyush Kumar (WhiruS)</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
              I’m a BCA student and a passionate web developer who enjoys
              building practical, user-friendly, and interactive web
              applications.
            </p>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              My interest in coding started with Python during school, but over
              time I discovered my real passion in web development. Since then,
              I’ve been learning, building, and improving step by step.
            </p>
          </div>
        </div>

        {/* Transition Text */}
        <div className="mb-16 sm:mb-20 text-center">
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            A journey built on curiosity, learning, and turning ideas into
            projects.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center lg:text-left">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-400">
                Bachelor of Computer Applications
              </h3>
              <p className="text-gray-300 mb-1 text-sm sm:text-base">
                Indira Gandhi National Open University
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                2022 - 2025
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-400">
                Senior Secondary Education
              </h3>
              <p className="text-gray-300 mb-1 text-sm sm:text-base">
                Government Sarvodaya Bal Vidyalaya
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                2020 - 2022
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center lg:text-left">
            My <span className="text-purple-400">Journey</span>
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>
              My journey into programming started in 11th standard when Python
              was introduced in school. Since I always liked mathematics and
              logical problem-solving, coding felt natural to me.
            </p>

            <p>
              After school, I was confused between Mathematics and Computer
              Science. Due to my CUET score and lack of clarity at the time, I
              chose BCA through IGNOU. In the beginning, I wasn’t very focused,
              and my first semester mostly went into understanding things.
            </p>

            <p>
              Things changed when I got my own PC at the end of second semester.
              That’s when I started taking coding seriously. I revisited basics
              through C and C++, and later moved into HTML, CSS, and JavaScript.
            </p>

            <p>
              When I found out about my final-year project requirement, I
              realized frontend alone wasn’t enough. That pushed me to learn PHP
              and MySQL, along with Bootstrap and Tailwind CSS, which helped me
              build my major project,{" "}
              <span className="text-purple-400">Campus Hub</span>.
            </p>

            <p>
              After that, I focused again on frontend to build stronger command
              over UI and UX. I worked on projects like{" "}
              <span className="text-purple-400">Rhythmix</span> and{" "}
              <span className="text-purple-400">SnapSorter</span>, while also
              making smaller practice projects.
            </p>

            <p>
              Alongside coding, I’ve also had an interest in design since
              school, using tools like Photoshop and later Figma, which helped
              me improve my UI sense and visual understanding.
            </p>

            <p>
              Right now, I’m focused on React and modern frontend development,
              while continuing to strengthen backend concepts. My goal is to
              become a strong full-stack developer and build scalable
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;