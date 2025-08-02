import React from 'react'
import logo from '../assets/images/logo-dark.svg'
import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

export default function  Footer() {
  return (
    <footer className='bg-blue-950 py-16'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <img src={logo} alt="" />
                    <p className='text-slate-400 pt-5'>At Morpich Technologies Pvt. Ltd, we specialize in App Development, Web Solutions, UI/UX Design, and Digital Marketing to help businesses grow and succeed online.</p>
                </div>
                <div className='lg:ms-12'>
                    <h5 className='inner-title !text-white/90'>Services</h5>
                    <ul className='mt-3'>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">Website Design</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">Website Development</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">App Development</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">UI/UX Design</Link> </li>
                    </ul>
                </div>
                <div className='lg:ms-10'>
                    <h5 className='inner-title !text-white/90'>Quick Links</h5>
                    <ul className='mt-3'>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="/">Home</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">Project</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">About</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">Services</Link> </li>
                        <li className='text-white/50 mb-2 hover:text-blue-500'><Link to="">Contact</Link> </li>
                    </ul>
                </div>
                <div>
                    <h5 className='inner-title !text-white/90'>Contact</h5>
                    <ul className='mt-3'>
                        <li className='text-white/50 mb-2'><Link to="" className='inline-flex gap-2'><FiMail className='size-5'/>info@morpich.com</Link> </li>
                        <li className='text-white/50 mb-2'><Link to="" className='inline-flex gap-2'><FiPhoneCall className='size-5'/>+91 75675 50411</Link> </li>
                        <li className='text-white/50 mb-2'><Link to="" className='inline-flex gap-2'><FiMapPin className='size-5'/>27 Division St, New York, NY 10002, USA</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
