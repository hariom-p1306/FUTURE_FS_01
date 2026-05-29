import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hariom-p1306",
      icon: <FaGithub size={21} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hariom-patel-dev",
      icon: <FaLinkedin size={21} />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);

      const scrollPosition = window.scrollY + 140;

      for (const item of menuItems) {
        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-[5vw] md:px-[7vw] lg:px-[10vw] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#050414]/75 backdrop-blur-2xl border-b border-purple-500/20 shadow-[0_8px_40px_rgba(130,69,236,0.18)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${
          isScrolled
            ? "px-4 md:px-6 py-2 bg-white/[0.03] border border-white/10"
            : "px-0 py-0"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleMenuItemClick("about")}
          className="group flex items-center gap-2"
          aria-label="Go to about section"
        >
          <span className="text-lg md:text-xl font-extrabold tracking-wide">
            <span className="text-purple-400">&lt;</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Hariom
            </span>
            <span className="text-gray-300"> / </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Patel
            </span>
            <span className="text-purple-400">&gt;</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3 py-2 backdrop-blur-xl">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-purple-500/25 to-pink-500/20 shadow-[0_0_18px_rgba(168,85,247,0.25)]"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <span className="absolute left-1/2 -bottom-2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 bg-white/[0.04] border border-white/10 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/15 hover:-translate-y-1 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1jSGvcMmKcQMHnuhB5cBOmH9oSUb3zXSO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden xl:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 shadow-[0_0_28px_rgba(168,85,247,0.35)] transition-all duration-300"
          >
            Resume
            <FiExternalLink size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/[0.06] border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-[5vw] z-50 w-[88vw] max-w-sm lg:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
        }`}
      >
        <div className="glass-card rounded-3xl p-5 border border-purple-500/25 shadow-[0_0_45px_rgba(130,69,236,0.28)]">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-1">
              Navigation
            </p>
            <h3 className="text-xl font-bold text-white">Explore Portfolio</h3>
          </div>

          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-purple-500/25 to-pink-500/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-px bg-white/10 my-5"></div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-gray-300 bg-white/[0.06] border border-white/10 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1jSGvcMmKcQMHnuhB5cBOmH9oSUb3zXSO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500"
            >
              Resume
              <FiExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;