import React from 'react'
import bg1 from '../assets/images/bg/bg-1.jpg'
import { Link } from 'react-router-dom'

export default function BannerTwo() {
  return (
    <section>
        <div className='h-screen bg-center object-cover relative z-0 flex justify-start items-center' style={{backgroundImage:`url(${bg1})`}}>
          <div className="overlay z-1"></div>
          <div className='container relative z-10 pb-25'>
            <div className=" text-start w-full">
                <span className='text-base text-white'>Creative & Innovative</span>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold md:leading-20 leading-15'>We Provide <br/>  Best It Services for You</h1>
                    <div className='flex gap-5 justify-start mt-5'>
                        <Link to="#" className='theme-btn'>Free Quote</Link>
                        <Link to="#" className='theme-btn-two'>Contact Us</Link>
                    </div>
                </div>
          </div>
        </div>
    </section>
  )
}
