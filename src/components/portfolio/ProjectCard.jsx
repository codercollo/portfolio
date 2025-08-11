import React from "react";
import { ExternalLink } from "lucide-react";

import accida from "../../assets/accida.png";
import portfolio from "../../assets/portfolio.png";
import hotel from "../../assets/hotel.png";
import autocad from "../../assets/autocad.png";
import archicad from "../../assets/archicad.png";
import revit from "../../assets/revit.png";

const images = {
  accida,
  portfolio,
  hotel,
  autocad,
  archicad,
  revit,
};

const ProjectCard = ({ project }) => {
  const imageSrc = images[project.image] || "";

  return (
    <div
      className="bg-indigo-400 bg-opacity-30 shadow-md rounded-lg overflow-hidden
      hover:shadow-[0_0_15px_4px_rgba(99,102,241,0.7)] transition-shadow"
    >
      <img
        src={imageSrc}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 space-y-2 text-white">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-300 hover:text-indigo-100 text-sm mt-2"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
