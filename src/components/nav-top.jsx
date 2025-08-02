import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function NavTop() {
  return (
    <div className='bg-blue-950 py-2 hidden md:block'>
      <div className="container">
        <div className="grid">
          <div className='flex justify-between items-center'>
            <ul className='md:flex gap-5'>
              <li className='text-white text-xs'><Link className='flex items-center'><FiMapPin className='me-1'/><span>Surat, Gujarat, India</span></Link></li>
              <li className='text-white text-xs'><Link className='flex items-center'><FiPhone className='me-1'/><span>+91 75675 50411</span></Link></li>
              <li className='text-white text-xs'><Link className='flex items-center'><FiMail className='me-1'/><span>info@Morpich Themes.com</span></Link></li>
            </ul>
            <ul className='flex items-center gap-1'>
              <li className='text-white border border-white rounded-full p-1.5'><FiTwitter/></li>
              <li className='text-white border border-white rounded-full p-1.5'><FiFacebook/></li>
              <li className='text-white border border-white rounded-full p-1.5'><FiInstagram/></li>
              <li className='text-white border border-white rounded-full p-1.5'><FiLinkedin/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
