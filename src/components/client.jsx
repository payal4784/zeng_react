import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { clientData } from '../data/data'
import { FaStar } from 'react-icons/fa6';

import { Autoplay } from 'swiper/modules';

export default function Client() {
  return (
    <div className='container relative'>
        <div className="grid grid-cols-1 text-center mb-6">
            <div>
                <h6 className='sub-title mb-3'>Testimonial</h6>
                <h2 className='mb-4 title lg:w-1/2 w-full mx-auto !text-white'>Clients We’ve Worked With</h2>
            </div>
        </div>
        <div className='lg:w-[50%] w-full mx-auto'>
          <Swiper  
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} 
            modules={[Autoplay]}>
            {clientData.map((item,index)=>( 
              <SwiperSlide>
                <div className='text-center px-4' key={index}>
                  <div className='inline-flex mx-auto mb-5 gap-1'>
                    <FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/>
                  </div>
                  <img src={item.image} alt="" className='mx-auto rounded-full p-2 border-2 border-blue-800 size-24 '/>
                  <p className='text-gray-400 italic py-4'>{item.desc}</p>
                  <h5 className='text-blue-800 font-bold'>{item.name}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}
