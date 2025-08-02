import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo-dark.svg'
import { Link, useLocation } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6'

export default function Navbar() {
  let [toggle, setToggle] = useState(false);
  let [scroll, setScroll] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scroll (0,0)
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScroll(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);
  return (
    <>
      <nav className={`navbar navdark tagline ${scroll ? 'is-sticky' : ''}`}>
        <div className="container flex items-center justify-between">
          <div className='nav-logo'>
            <img src={logo} alt="" className='w-[224px] h-auto'/>
          </div>
          <div className={`nav-manu md:block ${toggle ? '' : 'hidden'}`}>
            <ul className='justify-center me-5'>
            <li className={`nav-link ${['/','/home-2','/home-3'].includes(currentPath) ? 'active' : ''}`}> <span>Home</span>
              <ul className='submenu open'>
                <li className={`nav-link2 ${currentPath === '/' ? 'active' : ''}`}><Link to="/">Home-1</Link></li>
                <li className={`nav-link2 ${currentPath === '/home-2' ? 'active' : ''}`}><Link to="/home-2">Home-2</Link></li>
                <li className={`nav-link2 ${currentPath === '/home-3' ? 'active' : ''}`}><Link to="/home-3">Home-3</Link></li>
                <li className={`nav-link2 ${currentPath === '/home-4' ? 'active' : ''}`}><Link to="/home-3">Home-4</Link></li>
                <li className={`nav-link2 ${currentPath === '/home-5' ? 'active' : ''}`}><Link to="/home-3">Home-5</Link></li>
                <li className={`nav-link2 ${currentPath === '/home-6' ? 'active' : ''}`}><Link to="/home-3">Home-6</Link></li>
                <li className={`nav-link2 ${currentPath === '/home-7' ? 'active' : ''}`}><Link to="/home-3">Home-7</Link></li>
              </ul>
            </li>
              <li className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}><Link to="/about">About</Link></li>
              <li className={`nav-link ${currentPath === '/services' ? 'active' : ''}`}><Link to="/services">Services</Link></li>
              <li className={`nav-link ${currentPath === '/project' ? 'active' : ''}`}><Link to="/project">Project</Link></li>
              <li className={`nav-link ${currentPath === '/team' ? 'active' : ''}`}><Link to="/team">Team</Link></li>
              <li className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='nav-end'>
            <Link to="#" className='theme-btn'>Contact</Link>
            <div className="bar" onClick={()=>setToggle(!toggle)}><FaBarsStaggered /></div>
          </div>
        </div>
      </nav>
    </>
  )
}
