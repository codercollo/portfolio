import React from "react";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    label: "GitHub",
    icon: <Github size={24} />,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: <Linkedin size={24} />,
  },
  {
    href: "https://twitter.com/yourhandle",
    label: "Twitter",
    icon: <Twitter size={24} />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-300 mt-16 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Collins</h3>
          <p className="text-gray-400 leading-relaxed">
            Web Developer & CAD Drafter creating seamless web experiences and
            precise technical drafts using AutoCAD & ArchiCAD.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-blue-400" />
              <a
                href="mailto:collins@example.com"
                className="hover:text-blue-400 transition"
              >
                collins@example.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-blue-400" />
              <span>+254 712 345 678</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-6">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-300 hover:text-blue-400 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Collins Portfolio. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
