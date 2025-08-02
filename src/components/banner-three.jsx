import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/images/bg/bg-3.jpg'

export default function BannerThree() {
  return (
    <>
        <section>
            <div className='h-screen bg-center object-cover relative z-0 flex justify-center items-center' style={{backgroundImage:`url(${bg})`}}>
                <div className="overlay z-1"></div>
                <div className="container relative z-10 text-center w-full md:w-[60%] ">
                    <span className='text-base text-white'>Creative & Innovative</span>
                    <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold md:leading-20 leading-15'>We Provide Best It Services for You</h1>
                    <div className='flex gap-5 justify-center mt-5'>
                        <Link to="#" className='theme-btn'>Free Quote</Link>
                        <Link to="#" className='theme-btn-two'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
