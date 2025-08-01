import React from "react";
import { MapPin, Mail, BadgeInfo } from "lucide-react";
import aboutData from "../../data/about.json";
import SectionTitle from "../common/SectionTitle";
import { head } from "framer-motion/client";
import headshot from "../../assets/headshot.jpg"


const AboutSection = () => {
  const { name, title, description, location, email, experience, imageUrl } =
    aboutData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-blue-50 rounded-xl shadow-lg">
      <SectionTitle title="About Me" icon={<BadgeInfo size={24} />} />

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Left side - Circular Headshot Image */}
        <div className="flex-shrink-0 w-64 h-64">
          <img
            src={headshot}
            alt={`${name} headshot`}
            className="w-full h-full rounded-full object-cover shadow-xl border-8 border-indigo-500"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-5xl font-bold">{name}</h2>
          <h3 className="text-3xl font-semibold text-indigo-600 mt-2">
            {title}
          </h3>
          <p className="text-lg leading-relaxed mt-6 max-w-xl">{description}</p>

          <ul className="space-y-6 mt-10 max-w-md">
            <li className="flex items-center gap-5">
              <span className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                <MapPin size={28} />
              </span>
              <span className="text-gray-700 font-semibold text-lg">
                {location}
              </span>
            </li>
            <li className="flex items-center gap-5">
              <span className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                <Mail size={28} />
              </span>
              <a
                href={`mailto:${email}`}
                className="text-indigo-700 font-semibold text-lg underline hover:text-indigo-900 transition"
              >
                {email}
              </a>
            </li>
            <li className="flex items-center gap-5">
              <span className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                <BadgeInfo size={28} />
              </span>
              <span className="text-gray-700 font-semibold text-lg">
                {experience}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
