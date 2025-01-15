// src/components/ContactButton.tsx
"use client";

const ContactButton = () => (
  <button
    onClick={() => window.location.href = '/contact'}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
  >
    Contact Us
  </button>
);

export default ContactButton;

