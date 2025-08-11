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
    <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700">
      {/* Left side - Content */}
      <div className="flex flex-col justify-center px-10 md:px-20 py-20 bg-gray-900 w-full md:w-1/2">
        <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
          Hi, I'm Collins
        </h1>
        <p className="text-gray-300 text-xl max-w-xl mb-12">
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
            className="flex items-center justify-center border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side - 3D rotating cube with glowing dark blue */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-800 perspective-1000 relative">
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
                className="absolute w-40 h-40 bg-blue-900 bg-opacity-90 text-gray-100 flex items-center justify-center font-extrabold text-xl rounded-lg shadow-lg select-none glowing-blue"
                style={{
                  transform: rotations[index],
                }}
                aria-label={`Skill: ${face}`}
              >
                {face}
              </div>
            );
          })}
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

        /* Glowing dark blue effect */
        .glowing-blue {
          box-shadow: 0 0 5px 1px rgba(30, 58, 138, 0.5),
            0 0 10px 3px rgba(59, 130, 246, 0.3),
            0 0 15px 5px rgba(147, 197, 253, 0.15);
          transition: box-shadow 0.3s ease-in-out;
        }
        .glowing-blue:hover {
          box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.7),
            0 0 16px 5px rgba(147, 197, 253, 0.5),
            0 0 20px 8px rgba(191, 219, 254, 0.4);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
