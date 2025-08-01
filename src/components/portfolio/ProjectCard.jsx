import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:underline text-sm mt-2"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
