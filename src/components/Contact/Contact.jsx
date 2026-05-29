import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiSend, FiExternalLink } from "react-icons/fi";

import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        setLoading(false);

        toast.success("Message sent successfully! 🚀", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        setLoading(false);

        toast.error("Failed to send message. Please try again ❌", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  const contactLinks = [
    {
      title: "Email",
      value: "hp3432884@gmail.com",
      icon: <FiMail />,
      href: "mailto:hp3432884@gmail.com",
    },
    {
      title: "Location",
      value: "Ghaziabad, India",
      icon: <FiMapPin />,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/hariom-patel-dev",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/hariom-p1306",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-[6vw] md:px-[8vw] lg:px-[10vw]">
      {/* Background Glow */}
      <BlurBlob top="25%" left="10%" size="450px" />
      <BlurBlob top="80%" left="90%" size="400px" delay="3s" />

      <ToastContainer />

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-purple-400 text-sm font-semibold tracking-[0.35em] uppercase mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let&apos;s Work Together
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
          Have an internship opportunity, project idea, or collaboration in
          mind? Send me a message and I&apos;ll get back to you.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Left Info Card */}
        <div
          className="glass-card rounded-3xl p-7 md:p-8 border border-purple-500/20
          shadow-[0_0_45px_rgba(130,69,236,0.18)]"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-xs md:text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"></span>
            Open to SDE / Full Stack Internships
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Got a role or project?
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-7">
            I&apos;m actively looking for opportunities where I can contribute
            as a Full Stack Developer, especially in MERN stack, backend APIs,
            real-time systems, and production-level web applications.
          </p>

          <div className="space-y-4 mb-8">
            {contactLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10
                hover:bg-purple-500/10 hover:border-purple-400/40 transition duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-gray-400 text-xs">{item.title}</p>
                  <p className="text-white text-sm md:text-base">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div>
            <p className="text-gray-300 font-medium mb-4">Connect with me</p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] border border-purple-500/20 text-gray-200
                  hover:bg-purple-500/15 hover:border-purple-400/50 hover:-translate-y-1 transition duration-300"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                  <FiExternalLink className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div
          className="glass-card rounded-3xl p-7 md:p-8 border border-purple-500/20
          shadow-[0_0_45px_rgba(130,69,236,0.22)]
          hover:shadow-[0_0_60px_rgba(130,69,236,0.32)]
          transition duration-500"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Send Message
          </h3>

          <p className="text-gray-400 text-sm mb-7">
            Fill out the form below and I&apos;ll respond as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-2xl bg-[#100d20] text-white 
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500/60
                focus:border-purple-500
                placeholder:text-gray-500
                transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="w-full p-4 rounded-2xl bg-[#100d20] text-white 
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500/60
                focus:border-purple-500
                placeholder:text-gray-500
                transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Internship / Project / Collaboration"
                required
                className="w-full p-4 rounded-2xl bg-[#100d20] text-white 
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500/60
                focus:border-purple-500
                placeholder:text-gray-500
                transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full p-4 rounded-2xl bg-[#100d20] text-white 
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-purple-500/60
                focus:border-purple-500
                placeholder:text-gray-500
                resize-none
                transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="premium-btn inline-flex items-center justify-center gap-3
              bg-gradient-to-r from-purple-600 to-pink-500
              py-4 rounded-2xl text-white font-semibold
              shadow-[0_0_25px_rgba(130,69,236,0.45)]
              hover:shadow-[0_0_40px_rgba(236,72,153,0.65)]
              transition duration-300
              disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <FiSend />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;