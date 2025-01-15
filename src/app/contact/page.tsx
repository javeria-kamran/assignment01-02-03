// src/app/contact/page.tsx
"use client";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
      {/* Form */}
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700"
            placeholder="Enter your message"
            rows={4} 
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-md hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;




