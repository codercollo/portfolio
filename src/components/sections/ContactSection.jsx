import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { Mail, Phone, MapPin } from "lucide-react";
import contactData from "../../data/contact.json";
import * as LucideIcons from "lucide-react";

const ContactSection = () => {
  const { email, phone, location, socials } = contactData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-900 text-gray-200">
      <SectionTitle
        title="Get In Touch"
        icon={<Mail size={28} className="text-blue-400" />}
      />

      <div className="mt-12 flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left: Contact Info */}
        <div className="space-y-8 md:w-1/2">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-center space-x-4 mb-4">
              <Mail size={24} className="text-blue-400" />
              <a
                href={`mailto:${email}`}
                className="text-lg font-medium text-blue-300 hover:underline"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <Phone size={24} className="text-blue-400" />
              <span className="text-lg font-medium">{phone}</span>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin size={24} className="text-blue-400" />
              <span className="text-lg font-medium">{location}</span>
            </div>
          </div>

          <div className="flex space-x-6 mt-8">
            {socials.map(({ platform, url, icon }, idx) => {
              const Icon =
                LucideIcons[icon.charAt(0).toUpperCase() + icon.slice(1)] ||
                LucideIcons.Link;
              return (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Icon size={32} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-xl rounded-lg p-10 md:w-1/2"
          noValidate
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Send a Message
          </h3>

          {submitted && (
            <p className="mb-6 text-green-400 font-semibold text-center">
              Thanks for reaching out! I’ll get back to you soon.
            </p>
          )}

          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full mb-6 px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full mb-6 px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full mb-6 px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
