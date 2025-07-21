import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>

    <nav className='sticky top-0 bg-black px-6 py-4 flex justify-between items-center z-50'>
        <div className='text-2xl font-bold text-orange-400'>
        لاہور لاہور ہے
        </div>

        <ul className='flex space-x-6 text-orange-400 font-medium'>
            <li><Link to="/" className="hover:text-orange-400 cursor-pointer">Home</Link></li>
            <li> <Link to="about" className='hover:text-orange-700 cursor-pointer'>About</Link></li>
            <li><Link to="services" className='hover:text-orange-700 cursor-pointer'>Services </Link></li>
            <li> <Link to="contact" className='hover:text-orange-700 cursor-pointer'>Contact </Link></li>

        </ul>
    </nav>

    </>
  );
};

export default Navbar;
