import React from 'react'
import about from '../assets/images/about.jpg'
import about2 from '../assets/images/about-3.jpg'
import { LuChartNoAxesCombined, LuCheckCheck } from 'react-icons/lu'
import { FiCodesandbox, FiGrid } from 'react-icons/fi'

export default function About() {
  return (
    <div className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-15">
            <div className='relative'>
                <div className='lg:me-30 lg:mb-20 me-20 mb-10'>
                   <img src={about} alt="" className='rounded'/>
                </div>
                <div className='absolute end-0 bottom-0 lg:size-[350px] size-[200px] z-99 border-8 border-white rounded'>
                  <img src={about2} alt="" className='w-full h-full object-cover rounded'/>
                </div>
            </div>
            <div>
                <h6 className='sub-title mb-3'>About Us</h6>
                <h2 className='mb-4 title'>Passionate about building websites that deliver real results.</h2>
                <p className='text-slate-400'>We’re honored to collaborate with hundreds of forward-thinking businesses, including some of the world’s leading hardware, software, and technology brands.</p>
                <div className="grid mt-5">
                  <div className="flex items-center gap-4">
                    <div className='bg-linear-80 from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transition duration-500 p-2 rounded'>
                      <FiCodesandbox className='size-7 text-white'/>
                    </div>
                    <div>
                      <h4 className='inner-title'>Product Engineering</h4>
                      <p className='text-slate-400 text-sm'>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className='bg-linear-80 from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transition duration-500 p-2 rounded'>
                      <FiGrid className='size-7 text-white'/>
                    </div>
                    <div>
                      <h4 className='inner-title'>UI/UX Strategy</h4>
                      <p className='text-slate-400 text-sm'>User experience design is the practice of determining how a user will perceive and interact with a product or service.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className='bg-linear-80 from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transition duration-500 p-2 rounded'>
                      <LuChartNoAxesCombined className='size-7 text-white'/>
                    </div>
                    <div>
                      <h4 className='inner-title'>Big Data & Analytics</h4>
                      <p className='text-slate-400 text-sm'>Big Data analytics software gives businesses new capabilities that were previously only available to governments.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
