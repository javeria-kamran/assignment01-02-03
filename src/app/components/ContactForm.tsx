// src/components/ContactForm.tsx
"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Type the event parameter for handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Type the event parameter for handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending to an API)
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-md hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
        {submitted && <p className="text-green-400 mt-4">Thank you for your message!</p>}
      </form>
    </div>
  );
};

export default ContactForm;

