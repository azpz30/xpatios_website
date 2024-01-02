import React from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleNavLinkClick = () => {
    setToggle(false);
  };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-transparent'>
      <img src={logo} alt='Xpatios' className='w-[100px] h-[100px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}>
            <Link to={nav.id === 'gallery' ? '/gallery' : `/`} onClick={handleNavLinkClick}>
              {nav.title}
            </Link>
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

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} style={{ zIndex: 999 }}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
              <Link to={nav.id === 'gallery' ? '/gallery' : `/`} onClick={handleNavLinkClick}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;