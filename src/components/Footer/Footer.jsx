import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FiExternalLink, FiMail } from "react-icons/fi";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/hariom-patel-dev",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/hariom-p1306",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },
  ];

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background Glows */}
      <BlurBlob top="20%" left="12%" size="420px" opacity={0.22} />
      <BlurBlob
        top="85%"
        left="88%"
        size="380px"
        color1="#ec4899"
        color2="#8245ec"
        delay="3s"
        opacity={0.25}
      />

      <div
        className="relative z-10 border-t border-purple-500/20 
        bg-gradient-to-b from-white/[0.04] to-transparent
        backdrop-blur-xl px-[6vw] md:px-[8vw] lg:px-[10vw] py-10 md:py-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
            {/* Brand */}
            <div className="text-center md:text-left">
              <button
                onClick={() => handleScroll("about")}
                className="text-2xl md:text-3xl font-extrabold tracking-wide"
              >
                <span className="text-purple-400">&lt;</span>
                <span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                  text-transparent bg-clip-text"
                >
                  Hariom
                </span>
                <span className="text-gray-300"> / </span>
                <span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                  text-transparent bg-clip-text"
                >
                  Patel
                </span>
                <span className="text-purple-400">&gt;</span>
              </button>

              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                Backend-focused Full Stack Developer building scalable web apps,
                secure APIs, and real-time systems.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"></span>
                Open to SDE / Full Stack Internships
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-white text-lg font-bold mb-5">
                Quick Links
              </h3>

              <nav className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                {quickLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="px-4 py-2 rounded-xl text-sm text-gray-300 
                    bg-white/[0.04] border border-white/10
                    hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10
                    transition duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="text-center md:text-right">
              <h3 className="text-white text-lg font-bold mb-5">
                Let&apos;s Connect
              </h3>

              <div className="flex justify-center md:justify-end gap-3 mb-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-11 h-11 rounded-full flex items-center justify-center
                    text-gray-300 bg-white/[0.05] border border-purple-500/20
                    hover:text-white hover:bg-purple-500/15 hover:border-purple-400/50
                    hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]
                    transition duration-300 text-xl"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
                <a
                  href="mailto:hp3432884@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full 
                  bg-white/[0.05] border border-white/10 text-gray-200 text-sm
                  hover:bg-white/[0.1] hover:border-purple-400/40 transition duration-300"
                >
                  <FiMail />
                  Email Me
                </a>

                <a
                  href="https://drive.google.com/file/d/1jSGvcMmKcQMHnuhB5cBOmH9oSUb3zXSO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full 
                  bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold
                  hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.35)]
                  transition duration-300"
                >
                  Resume
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-[1px] bg-gradient-to-r 
            from-transparent via-purple-500/40 to-transparent my-10"
          ></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Hariom Patel. All rights reserved.
            </p>

            <p className="text-sm text-gray-500">
              Built with{" "}
              <span className="text-purple-400 font-medium">React</span>,{" "}
              <span className="text-pink-400 font-medium">Tailwind CSS</span>{" "}
              and passion.
            </p>

            <button
              onClick={() => handleScroll("about")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-white/[0.05] border border-purple-500/20 text-gray-300 text-sm
              hover:text-white hover:bg-purple-500/15 hover:-translate-y-1
              transition duration-300"
            >
              Back to Top
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;