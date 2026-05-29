import React from "react";
import { experiences } from "../constants";
import BlurBlob from "../../components/BlurBlob/BlurBlob";
import { FaBriefcase, FaLocationDot, FaCalendarDays } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className="relative overflow-hidden py-20 px-[6vw] md:px-[8vw] lg:px-[10vw]">
      <BlurBlob top="20%" left="15%" size="380px" />
      <BlurBlob top="75%" left="85%" size="360px" delay="3s" />

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-purple-400 text-sm font-semibold tracking-[0.35em] uppercase mb-3">
          My Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Experience
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
          Practical internship experience where I worked on real-world web
          applications, backend APIs, authentication, admin panels, and
          production-level features.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="glass-card rounded-3xl p-6 md:p-7 border border-purple-500/20
            hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(130,69,236,0.35)]
            transition duration-500"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/30 text-xs font-medium">
                <FaBriefcase />
                Internship
              </span>

              <span className="inline-flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCalendarDays className="text-pink-400" />
                {exp.duration}
              </span>
            </div>

            {/* Role */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {exp.role}
            </h3>

            <p className="text-purple-300 font-semibold text-base md:text-lg mb-2">
              {exp.company}
            </p>

            <p className="inline-flex items-center gap-2 text-gray-500 text-sm mb-6">
              <FaLocationDot className="text-purple-400" />
              {exp.location}
            </p>

            {/* Description */}
            <ul className="space-y-3 mb-6">
              {exp.description.slice(0, 3).map((point, index) => (
                <li
                  key={index}
                  className="text-gray-400 text-sm md:text-[15px] leading-relaxed flex gap-3"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;