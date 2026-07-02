import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/profile.jpeg";
import DotPattern from "../../component/DotPattern/DotPattern";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Background */}
      <DotPattern />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-20 py-10">
        {/* Left Content */}
        <div className="text-white flex-1 text-center lg:text-left">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
            Piyush Kumar
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 min-h-[60px] sm:min-h-[80px]">
            I'm a{" "}
            <span className="text-purple-400">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            I build modern, responsive, and scalable web applications with clean
            UI, smooth interactions, and user-focused experiences.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 w-full sm:w-auto">
            <button className="w-full md:w-auto px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              View Projects
            </button>

            <button className="w-full md:w-auto px-6 py-3 rounded-lg border border-purple-500 text-purple-400 font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="
              w-52 h-52
              sm:w-64 sm:h-64
              md:w-80 md:h-80
              lg:w-[28rem] lg:h-[28rem]
              xl:w-[34rem] xl:h-[34rem]
              object-cover rounded-full border-4 border-purple-500
              shadow-lg shadow-purple-500/20
              transition-transform duration-300 hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
