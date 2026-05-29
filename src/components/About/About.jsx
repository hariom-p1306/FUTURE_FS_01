import React from "react";
import {
  FaRocket,
  FaCode,
  FaDatabase,
  FaBriefcase,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import profileImage from "../../assets/hariompatel.png";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const About = () => {
  const highlights = [
    {
      icon: <FaRocket />,
      color: "text-purple-400",
      text: (
        <>
          Built real-time applications with{" "}
          <span className="text-blue-400 font-medium">WebRTC</span>,{" "}
          <span className="text-purple-400 font-medium">Socket.io</span>, and
          secure room-based communication.
        </>
      ),
    },
    {
      icon: <FaCode />,
      color: "text-green-400",
      text: (
        <>
          Developed REST APIs using{" "}
          <span className="text-green-400 font-medium">Node.js</span>,{" "}
          <span className="text-green-400 font-medium">Express.js</span>, JWT
          authentication, and MVC architecture.
        </>
      ),
    },
    {
      icon: <FaDatabase />,
      color: "text-yellow-400",
      text: (
        <>
          Worked with{" "}
          <span className="text-yellow-400 font-medium">MongoDB</span>,{" "}
          <span className="text-yellow-400 font-medium">PostgreSQL</span>, and{" "}
          <span className="text-yellow-400 font-medium">MySQL</span> for
          database design and CRUD operations.
        </>
      ),
    },
    {
      icon: <FaBriefcase />,
      color: "text-cyan-400",
      text: (
        <>
          Gained practical experience through internships and production-level
          web development work.
        </>
      ),
    },
  ];

  const stats = [
    {
      value: "300+",
      label: "LeetCode Problems",
      color: "text-purple-400",
    },
    {
      value: "3+",
      label: "Major Projects",
      color: "text-blue-400",
    },
    {
      value: "2",
      label: "Internships",
      color: "text-pink-400",
    },
    {
      value: "2027",
      label: "Graduation",
      color: "text-green-400",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center
      py-24 md:py-28 px-[6vw] md:px-[8vw] lg:px-[10vw]
      bg-gradient-to-br from-[#070c18] via-[#0b0f1c] to-[#140d2a]"
    >
      {/* Background Blobs */}
      <BlurBlob top="18%" left="12%" size="420px" />
      <BlurBlob top="75%" left="88%" size="420px" delay="3s" />

      {/* Background Glows */}
      <div className="absolute left-0 top-0 w-[360px] md:w-[520px] h-[360px] md:h-[520px] bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute right-0 top-20 w-[420px] md:w-[620px] h-[420px] md:h-[620px] bg-purple-600/25 blur-[170px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-purple-400 mb-4 tracking-[0.35em] uppercase text-xs md:text-sm font-semibold">
              About Me
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                Hariom Patel
              </span>
            </h1>

            {/* Badge */}
            <div
              className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full 
              bg-gradient-to-r from-purple-500/10 to-pink-500/10 
              border border-purple-500/30 text-gray-200 backdrop-blur-md text-sm md:text-base"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></span>
              Backend-Focused Full Stack Developer
            </div>

            <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-xl">
              I build scalable full-stack web applications using{" "}
              <span className="text-green-400 font-semibold">MERN Stack</span>,{" "}
              <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
              <span className="text-purple-400 font-semibold">TypeScript</span>,
              and modern backend technologies. I enjoy creating secure APIs,
              real-time systems, clean user interfaces, and practical products
              that solve real problems.
            </p>

            {/* Highlights */}
            <div className="mt-8 md:mt-10 space-y-5 text-gray-300 text-sm md:text-base">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex-shrink-0 text-lg ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <p className="leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="premium-btn inline-flex items-center gap-2 px-6 md:px-8 py-3 rounded-full 
                bg-gradient-to-r from-purple-600 to-pink-500 
                text-white font-semibold 
                shadow-[0_0_35px_rgba(168,85,247,0.45)]
                transition duration-300 text-sm md:text-base"
              >
                View Projects
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="https://drive.google.com/file/d/1b_dFkMFcwJ-hlvxYV6Qe-UPUUwq2TbsG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 rounded-full border border-purple-500/60 
                text-white hover:bg-purple-500/15 hover:border-purple-400
                transition duration-300 text-sm md:text-base"
              >
                Download Resume
                <FaDownload className="text-sm" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px]
              bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-pink-500/25 
              blur-[150px] rounded-full"
            ></div>

            <div className="relative z-10 w-[280px] sm:w-[340px] md:w-[390px] lg:w-[430px]">
              {/* Outer Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-purple-500/40 via-blue-500/25 to-pink-500/40 blur-2xl"></div>

              {/* Image Card */}
              <div
                className="relative overflow-hidden rounded-[2rem] border border-purple-500/30 
                bg-white/[0.04] backdrop-blur-xl
                shadow-[0_0_70px_rgba(130,69,236,0.42)]"
              >
                <img
                  src={profileImage}
                  alt="Hariom Patel"
                  className="w-full h-full object-cover"
                />

                {/* Soft bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050414]/25 via-transparent to-transparent"></div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -left-5 top-1/3 px-3 py-2 rounded-2xl bg-[#0f1025]/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(130,69,236,0.35)]">
                <span className="text-green-400 font-bold text-sm">Node.js</span>
              </div>

              <div className="absolute -right-5 top-1/2 px-3 py-2 rounded-2xl bg-[#0f1025]/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(130,69,236,0.35)]">
                <span className="text-blue-400 font-bold text-sm">React</span>
              </div>

              <div className="absolute left-8 -bottom-5 px-3 py-2 rounded-2xl bg-[#0f1025]/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(130,69,236,0.35)]">
                <span className="text-yellow-400 font-bold text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="relative z-10 mt-16 md:mt-20 bg-white/[0.04] backdrop-blur-xl 
          border border-purple-500/20 rounded-3xl p-6 md:p-8
          shadow-[0_0_45px_rgba(130,69,236,0.16)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl py-4 px-3 bg-white/[0.03] border border-white/10"
              >
                <h3 className={`text-2xl md:text-3xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;