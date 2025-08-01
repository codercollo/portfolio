import React from "react";
import { ArrowRight } from "lucide-react";

const cubeFaces = [
  "JavaScript",
  "React",
  "Next.js",
  "AutoCAD",
  "ArchiCAD",
  "Revit",
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-tr from-[#1a1a2e] via-[#3a0ca3] to-[#5f27cd]">
      {/* Left side - Content with white bg */}
      <div className="flex flex-col justify-center px-10 md:px-20 py-20 bg-white w-full md:w-1/2">
        <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Hi, I'm Collins
        </h1>
        <p className="text-gray-600 text-xl max-w-xl mb-12">
          Web Developer & CAD Drafter specialized in AutoCAD & ArchiCAD. I
          create seamless web experiences and precise technical drafts.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="#portfolio"
            className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-blue-700 transform hover:scale-105 transition"
          >
            View Portfolio
            <ArrowRight className="ml-3" size={20} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side - 3D rotating cube with overlay */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-blue-100 perspective-1000 relative">
        <div className="relative w-40 h-40 transform-style-preserve-3d animate-spin-slow">
          {cubeFaces.map((face, index) => {
            const rotations = [
              "rotateY(0deg) translateZ(100px)", // Front
              "rotateY(90deg) translateZ(100px)", // Right
              "rotateY(180deg) translateZ(100px)", // Back
              "rotateY(-90deg) translateZ(100px)", // Left
              "rotateX(90deg) translateZ(100px)", // Top
              "rotateX(-90deg) translateZ(100px)", // Bottom
            ];
            return (
              <div
                key={index}
                className="absolute w-40 h-40 bg-blue-600 bg-opacity-90 text-white flex items-center justify-center font-extrabold text-xl rounded-lg shadow-lg select-none"
                style={{
                  transform: rotations[index],
                }}
                aria-label={`Skill: ${face}`}
              >
                {face}
              </div>
            );
          })}

          {/* Overlay with text only, no bg */}

        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
          transform-origin: center center;
        }
        @keyframes spin {
          from {
            transform: rotateX(-20deg) rotateY(0deg);
          }
          to {
            transform: rotateX(-20deg) rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
