"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            MyLogo
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/yuzhou/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/yuzhou/portfolio" className="text-white hover:text-gray-400">Portfolio</Link>
          <Link href="/yuzhou/resume" className="text-white hover:text-gray-400">Resume</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white hover:bg-gray-700 p-2">Home</Link>
          <Link href="/about" className="block text-white hover:bg-gray-700 p-2">About</Link>
          <Link href="/services" className="block text-white hover:bg-gray-700 p-2">Services</Link>
          <Link href="/contact" className="block text-white hover:bg-gray-700 p-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
