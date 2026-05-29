import React from "react";
import { achievements } from "../constants";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Achievements = () => {
  return (
    <section className="relative overflow-hidden py-24 px-[6vw] md:px-[8vw] lg:px-[15vw]">
      <BlurBlob top="20%" left="10%" size="420px" delay="2s" />
      <BlurBlob top="75%" left="85%" size="380px" delay="4s" />

      {/* Section Heading */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          Proof of Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Achievements
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm md:text-base">
          Highlights from coding practice, hackathons, technical events, and
          competitive programming that reflect my consistency and growth.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-3xl p-6 border border-purple-500/20
            hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(130,69,236,0.35)]
            transition duration-500"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                🏆
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;