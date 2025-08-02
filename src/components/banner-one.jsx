import bg1 from '../assets/images/bg/bg-1.jpg'
import bg2 from '../assets/images/bg/bg-2.jpg'
import bg3 from '../assets/images/bg/bg-3.jpg'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function BannerOne() {
  return (
    <Swiper className='' modules={[Autoplay]} loop={true} speed={2500} autoplay={{delay: 3000, disableOnInteraction: false,}}>
      <SwiperSlide>
        <div className='h-screen bg-center object-cover relative z-0 flex justify-center items-center' style={{backgroundImage:`url(${bg1})`}}>
          <div className="overlay z-1"></div>
          <div className="container relative z-10 text-center w-full md:w-[60%] ">
            <span className='text-base text-white'>Creative & Innovative</span>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold md:leading-20 leading-15'>We Provide Best It Services for You</h1>
            <div className='flex gap-5 justify-center mt-5'>
              <Link className='theme-btn'>Free Quote</Link>
              <Link className='theme-btn-two'>Contact Us</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen bg-center object-cover relative z-0 flex justify-center items-center' style={{backgroundImage:`url(${bg2})`}}>
          <div className="overlay z-1"></div>
          <div className="container relative z-10 text-center w-full md:w-[60%] ">
            <span className='text-base text-white'>Creative & Innovative</span>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold md:leading-20 leading-15'>We Provide Best It Services for You</h1>
            <div className='flex gap-5 justify-center mt-5'>
              <Link className='theme-btn'>Free Quote</Link>
              <Link className='theme-btn-two'>Contact Us</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen bg-center object-cover relative z-0 flex justify-center items-center' style={{backgroundImage:`url(${bg3})`}}>
          <div className="overlay z-1"></div>
          <div className="container relative z-10 text-center w-full md:w-[60%] ">
            <span className='text-base text-white'>Creative & Innovative</span>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold md:leading-20 leading-15'>We Provide Best It Services for You</h1>
            <div className='flex gap-5 justify-center mt-5'>
              <Link className='theme-btn'>Free Quote</Link>
              <Link className='theme-btn-two'>Contact Us</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
