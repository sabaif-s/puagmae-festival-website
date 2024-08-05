import React from 'react';
import { navLinks, socialLinks } from '../constants';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='bg-black text-white'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto py-4'>
        <div>
          <img 
            src={logo} 
            alt="puagmae logo" 
            className='w-20 h-20'
          />
        </div>
        <ul className='flex space-x-6'>
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <a 
                href={navLink.path} 
                className='text-lg font-medium text-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className='flex space-x-4'>
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
      </nav>
    </div>
  );
};

export default NavBar;
