// src/components/common/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
      {icon}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default SectionTitle;
