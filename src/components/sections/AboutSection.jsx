import React from "react";
import { MapPin, Mail, BadgeInfo } from "lucide-react";
import aboutData from "../../data/about.json";
import SectionTitle from "../common/SectionTitle";
import headshot from "../../assets/headshot.jpg";

const AboutSection = () => {
  const { name, title, description, location, email, experience } = aboutData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-gray-900 text-gray-200 rounded-xl shadow-lg glowing-blue-border">
      <SectionTitle
        title="About Me"
        icon={<BadgeInfo size={24} className="text-blue-400" />}
      />

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Left side - Circular Headshot Image */}
        <div className="flex-shrink-0 w-64 h-64">
          <img
            src={headshot}
            alt={`${name} headshot`}
            className="w-full h-full rounded-full object-cover shadow-xl border-8 border-blue-500"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-white">{name}</h2>
          <h3 className="text-3xl font-semibold text-blue-400 mt-2">{title}</h3>
          <p className="text-lg leading-relaxed mt-6 max-w-xl text-gray-300">
            {description}
          </p>

          <ul className="space-y-6 mt-10 max-w-md">
            <li className="flex items-center gap-5">
              <span className="p-4 bg-gray-800 text-blue-400 rounded-full">
                <MapPin size={28} />
              </span>
              <span className="font-semibold text-lg">{location}</span>
            </li>
            <li className="flex items-center gap-5">
              <span className="p-4 bg-gray-800 text-blue-400 rounded-full">
                <Mail size={28} />
              </span>
              <a
                href={`mailto:${email}`}
                className="text-blue-300 font-semibold text-lg underline hover:text-blue-400 transition"
              >
                {email}
              </a>
            </li>
            <li className="flex items-center gap-5">
              <span className="p-4 bg-gray-800 text-blue-400 rounded-full">
                <BadgeInfo size={28} />
              </span>
              <span className="font-semibold text-lg">{experience}</span>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .glowing-blue-border {
          border: 2px solid #3b82f6; /* Tailwind blue-500 */
          box-shadow: 0 0 4px 1px rgba(59, 130, 246, 0.4),
            0 0 8px 2px rgba(147, 197, 253, 0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
        .glowing-blue-border:hover {
          box-shadow: 0 0 6px 2px rgba(59, 130, 246, 0.6),
            0 0 12px 4px rgba(147, 197, 253, 0.5);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
