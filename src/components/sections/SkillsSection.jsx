import React from "react";
import SectionTitle from "../common/SectionTitle";
import skills from "../../data/skills.json";
import { Star } from "lucide-react";

const levelColors = {
  Beginner: "bg-gray-700 text-gray-200",
  Intermediate: "bg-blue-500 text-white",
  Expert: "bg-indigo-600 text-white",
};

const SkillsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-gray-200">
      <SectionTitle
        title="Skills"
        icon={<Star size={24} className="text-blue-400" />}
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map(({ id, name, level, description }) => (
          <div
            key={id}
            className="relative w-full h-48 cursor-pointer perspective group"
          >
            <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center p-5 backface-hidden">
                <Star className="text-blue-400 mb-3" size={32} />
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {name}
                </h4>
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                    levelColors[level] || "bg-gray-600 text-gray-200"
                  }`}
                >
                  {level}
                </span>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-indigo-600 rounded-xl text-white p-5 flex items-center justify-center text-center backface-hidden rotate-y-180">
                <p className="text-sm">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
