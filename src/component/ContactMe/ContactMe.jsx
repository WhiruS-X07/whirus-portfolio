import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 text-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="text-purple-400">Me</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Have an idea, project, or opportunity? Feel free to reach out.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Contact Info */}
          <div className="space-y-6">

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">
                Get In Touch
              </h2>

              <div className="space-y-5 text-gray-300">

                <a
                  href="mailto:piyush1672003@gmail.com"
                  className="flex items-center gap-4 hover:text-purple-400 transition"
                >
                  <FaEnvelope size={20} />
                  piyush1672003@gmail.com
                </a>

                <a
                  href="tel:+918800904044"
                  className="flex items-center gap-4 hover:text-purple-400 transition"
                >
                  <FaPhone size={20} />
                  +91 8800904044
                </a>

                <a
                  href="https://github.com/WhiruS-X07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-purple-400 transition"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/whirus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-purple-400 transition"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>

                <a
                  href="https://drive.google.com/file/d/1SMrrjy-XYeEPNKkQ8pPojHqLNz4IO22N/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-purple-400 transition"
                >
                  <FaFileAlt size={20} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-purple-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none resize-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;