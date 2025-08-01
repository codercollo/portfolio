// src/components/common/Navbar.jsx
import React from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center space-x-8 p-4 text-sm font-medium text-gray-700">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-blue-600 transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
