import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo-dark.svg'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'

export default function Navbar() {
  let [toggle, setToggle] = useState(false);
  let [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScroll(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);
  return (
    <>
      <nav className={`navbar ${scroll ? 'is-sticky' : ''}`}>
        <div className="container flex items-center justify-between">
          <div className='nav-logo'>
            <img src={logo} alt="" className='w-[224px] h-auto'/>
          </div>
          <div className={`nav-manu md:block ${toggle ? '' : 'hidden'}`}>
            <ul className='justify-center me-5'>
              <li className='nav-link active'><Link to="/">Home</Link></li>
              <li className='nav-link'><Link to="/about">About</Link></li>
              <li className='nav-link'><Link to="/">Services</Link></li>
              <li className='nav-link'><Link to="/">Project</Link></li>
              <li className='nav-link'><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className='nav-end'>
            <button className='theme-btn'>Contact</button>
            <div className="bar" onClick={()=>setToggle(!toggle)}><FaBarsStaggered /></div>
          </div>
        </div>
      </nav>
    </>
  )
}
