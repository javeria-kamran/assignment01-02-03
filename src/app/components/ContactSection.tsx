// src/pages/contact.tsx
"use client";

import SocialMediaIcons from '../components/SocialMediaIcons';

const ContactPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
        <input type="text" id="name" className="bg-gray-700 text-white w-full p-2 rounded-md" placeholder="Your Name" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
        <input type="email" id="email" className="bg-gray-700 text-white w-full p-2 rounded-md" placeholder="Your Email" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
        <textarea id="message" className="bg-gray-700 text-white w-full p-2 rounded-md" placeholder="Your Message" rows={4}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
        Send Message
      </button>
    </form>
    <SocialMediaIcons />
  </div>
);

export default ContactPage;

  