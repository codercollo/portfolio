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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0
      bg-gray-900 bg-opacity-20 
      backdrop-blur-xl 
      border border-indigo-400/20 
      shadow-lg shadow-indigo-900/30
      z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo/Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-3xl font-extrabold text-indigo-400 tracking-wide cursor-pointer select-none font-mono drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
        >
          Collins
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-12">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="relative text-indigo-200 text-lg font-semibold font-mono
                hover:text-indigo-400 transition-colors duration-300
                before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                before:bg-indigo-400 before:transition-all before:duration-300 hover:before:w-full
                drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X
              size={28}
              className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
            />
          ) : (
            <Menu
              size={28}
              className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
            />
          )}
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <nav
          className="md:hidden
          bg-gray-900 bg-opacity-20 
          backdrop-blur-xl
          border-t border-indigo-400/20
          shadow-inner shadow-indigo-900/20"
        >
          <ul className="flex flex-col space-y-6 px-6 py-6 text-indigo-300 text-lg font-mono">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="block hover:text-indigo-400 transition duration-300"
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
