import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-3">Lahore Explorer</h2>
          <p className="text-sm">
            Discover the beauty, history, and flavors of the heart of Pakistan — Lahore!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
             <li><Link to="/" className="hover:text-orange-400 cursor-pointer">Home</Link></li>
            <li> <Link to="about" className='hover:text-orange-700 cursor-pointer'>About</Link></li>
            <li><Link to="services" className='hover:text-orange-700 cursor-pointer'>Services </Link></li>
            <li> <Link to="contact" className='hover:text-orange-700 cursor-pointer'>Contact </Link></li>

          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lahore Explorer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
