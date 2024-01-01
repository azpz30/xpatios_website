import React, { useState, useEffect } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = ({ onGalleryClick }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Listen for changes in the hash (section changes)
    const handleHashChange = () => {
      if (window.location.hash === '#gallery') {
        onGalleryClick();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [onGalleryClick]);

  const handleGalleryClick = () => {
    onGalleryClick();
    // Update the URL hash to reflect the change
    window.location.hash = 'gallery';
  };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-transparent'>
      <img src={logo} alt='Xpatios' className='w-[100px] h-[100px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}>
            {nav.id === 'gallery' ? (
              <a href='#' onClick={handleGalleryClick}>
                {nav.title}
              </a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                {nav.id === 'gallery' ? (
                  <a href='#' onClick={handleGalleryClick}>
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;