import React from 'react';
import Banner from './banner';

const Contact = () => {
  return (
    <>
      <Banner title={"Contact Us"} />

      <div className="bg-black min-h-screen flex items-center justify-center py-10 px-6">
        <form className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 text-center">Get In Touch</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />

          <textarea
            placeholder="Enter Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
