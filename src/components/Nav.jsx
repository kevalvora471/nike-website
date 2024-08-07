import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import { crossIcon, hamburger } from '../assets/icons'
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (<>
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href=""><img src={headerLogo} alt="Logo" width={130} height={29} /></a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block cursor-pointer' onClick={toggleMenu}>
          {isMenuOpen 
            ? 
              <img src={crossIcon} className='font-bold' alt='hamburger icon' width={20} height={20} /> 
            : <img src={hamburger} alt='hamburger icon' width={25} height={25} />}
        </div>



      </nav>
      {
        isMenuOpen ? (
          <ul className='mt-3 flex-col lg:hidden rounded-xl bg-[#ff6452] opacity-95 font-montserrat border-2  flex justify-center items-center gap-5 p-4 z-50 transition-opacity' >
            <li><a href="#home" className='text-white px-6 py-2 hover:bg-slate-100 rounded-full hover:text-yellow-950 transition duration-150 ease-in-out'>Home</a></li>
            <li><a href="#about-us" className='text-white px-6 py-2 hover:bg-slate-100 rounded-full hover:text-yellow-950 transition duration-150 ease-in-out'>About Us</a></li>
            <li><a href="#products" className='text-white px-6 py-2 hover:bg-slate-100 rounded-full hover:text-yellow-950 transition duration-150 ease-in-out'>Products</a></li>
            <li><a href="#contact-us" className='text-white px-6 py-2 hover:bg-slate-100 rounded-full hover:text-yellow-950 transition duration-150 ease-in-out'>Contact Us</a></li>
            <li><span href="#contact-us" className='text-white px-6 py-2 hover:bg-slate-100 rounded-full hover:text-yellow-950 transition duration-150 ease-in-out'>
              <a href='/'>Sign in</a>
              <span> / </span>
              <a href='/'>Explore now</a></span></li>
          </ul >) : null}
    </header>

  </>
  )
}

export default Nav