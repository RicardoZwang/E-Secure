import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import '../assets/style/navbar.css'


export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  // Adjust the nav state based on the window width
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth >= 768) { //768px is the 'md' breakpoint
        setNav(false);
      }
    };

    // Check the size initially and upon window resize
    checkSize();
    window.addEventListener('resize', checkSize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <ul className='hidden md:flex'>
        <li className='p-4'><NavLink to="/">Home</NavLink></li>
        <li className='p-4'><NavLink to="/data">Data</NavLink></li>
        <li className='p-4 '><NavLink to="/sumlator">Simulation</NavLink></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>

        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

      </div>
      <div className={`${nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out fixed left-[-100%]'} md:hidden`}>

        <ul className='pt-4 uppercase'>
          <li className='p-4 border-b border-gray-600'><NavLink to="/" onClick={() => setNav(false)}>Home</NavLink></li>
          <li className='p-4 border-b border-gray-600'><NavLink to="/data" onClick={() => setNav(false)}>Data</NavLink></li>
          <li className='p-4 border-b border-gray-600'><NavLink to="/simulator" onClick={() => setNav(false)}>Simulation</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar