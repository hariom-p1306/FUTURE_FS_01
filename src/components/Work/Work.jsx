import React, { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { projects } from "../constants";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-[6vw] md:px-[8vw] lg:px-[10vw]">
      <BlurBlob top="20%" left="15%" size="460px" />
      <BlurBlob top="82%" left="88%" size="420px" delay="3s" />

      {/* Section Title */}
      <div className="text-center mb-14 md:mb-16 relative z-10">
        <p className="text-purple-400 text-sm font-semibold tracking-[0.35em] uppercase mb-3">
          My Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured Projects
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
          A collection of my major full-stack projects built with real-time
          systems, secure APIs, authentication, database design, and modern UI.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="glass-card group rounded-3xl overflow-hidden cursor-pointer border border-purple-500/20
            hover:-translate-y-2 hover:border-purple-400/40
            hover:shadow-[0_0_45px_rgba(130,69,236,0.35)]
            transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-[#050414]/30 to-transparent opacity-80"></div>

              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/40 backdrop-blur-md">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col min-h-[315px]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-purple-300 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 7).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-center text-sm py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-center text-sm py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.45)] transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-5 md:p-6 border border-purple-500/30 shadow-[0_0_60px_rgba(130,69,236,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/50 text-white border border-white/10 hover:bg-purple-500/30 transition"
              aria-label="Close project modal"
            >
              <FiX size={22} />
            </button>

            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent"></div>
            </div>

            <span className="inline-block px-4 py-1.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/40 mb-4">
              Featured Project
            </span>

            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {selectedProject.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 premium-btn bg-gray-800 text-white py-3 rounded-xl text-center"
              >
                <FiGithub />
                View Code
              </a>

              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 premium-btn bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl text-center"
              >
                <FiExternalLink />
                View Live
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;