import React, { useState } from 'react';
import { navLinks, socialLinks } from '../constants';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 left-0 w-full bg-black text-white z-50'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto py-4'>
        <div className='flex-none'>
          <img 
            src={logo} 
            alt="puagmae logo" 
            className='w-20 h-20'
          />
        </div>
        <div className='hidden lg:flex justify-center'>
          <ul className='flex space-x-6 list-none'>
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <a 
                  href={`#${navLink.id}`} 
                  className='text-lg font-medium text-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:flex space-x-4'>
          <ul className='flex space-x-4 list-none'>
            {socialLinks.map((socialLink) => (
              <li key={socialLink.path}>
                <a 
                  href={socialLink.path} 
                  className='text-xl text-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
                >
                  {socialLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:hidden flex items-center px-4'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex flex-col h-full p-4'>
          <div className='flex justify-between items-center mb-4'>
            <img 
              src={logo} 
              alt="puagmae logo" 
              className='w-16 h-16'
            />
            <button onClick={() => setIsOpen(false)} className='text-white'>
              <FaTimes size={24} />
            </button>
          </div>
          <ul className='flex flex-col space-y-4'>
            {navLinks.map((navLink) => (
              <li key={navLink.id} className='cursor-pointer'>
                <a
                  href={`#${navLink.id}`}
                  className='text-lg font-medium text-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col space-y-4 mt-4'>
            {socialLinks.map((socialLink) => (
              <li key={socialLink.path}>
                <a 
                  href={socialLink.path} 
                  className='text-xl text-white hover:text-goldenrod'
                >
                  {socialLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
