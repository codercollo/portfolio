import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile after click
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo/Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-2xl font-bold text-blue-600 cursor-pointer select-none"
        >
          Collins
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-blue-600" />
          ) : (
            <Menu size={24} className="text-blue-600" />
          )}
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="block text-gray-700 hover:text-blue-600 text-lg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
