import React from "react";
import SectionTitle from "../common/SectionTitle";
import { FolderOpen } from "lucide-react";
import projects from "../../data/projects.json";
import PortfolioGrid from "../portfolio/PortfolioGrid";

const PortfolioSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-gray-900 text-gray-200">
      <SectionTitle
        title="Portfolio"
        icon={<FolderOpen size={24} className="text-blue-400" />}
      />
      <PortfolioGrid projects={projects} />
    </section>
  );
};

export default PortfolioSection;
