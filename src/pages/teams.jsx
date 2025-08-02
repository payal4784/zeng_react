import React from 'react'
import NavTop from '../components/nav-top'
import NavLight from '../components/nav-light'
import bg from  '../assets/images/about.jpg'
import Footer from '../components/footer'
import BackToTop from '../components/back-to-top'
import { teamData } from '../data/data'

export default function Teams() {
  return (
    <>
     <NavTop/>
     <NavLight/>
      <section className="bg-blue-900 text-white py-20 h-[500px] relative" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="overlay"></div>
        <div className="container text-center relative flex justify-center items-center h-full">
          <div>
             <h1 className="text-4xl md:text-5xl font-bold mb-4">Teams</h1>
              <p className="text-lg text-blue-200">Empowering businesses through smart technology and digital innovation.</p>
          </div>
        </div>
      </section> 
    <section className='md:py-24 py-16'>
        <div className='container'>
            <div className="grid grid-cols-1 text-center mb-6">
                <div>
                    <h6 className='sub-title mb-3'>Team</h6>
                    <h2 className='mb-4 title lg:w-1/2 w-full mx-auto'>Passionate Minds at Work</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamData.map((item,index)=>( 
                    
                    <div className='relative group' key={index}>
                        <img src={item.image} alt="" />
                        <div className='text-center shadow shadow-slate-200 mx-7 bg-white p-4 rounded -mt-8 relative z-11'>
                            <h3 className='inner-title'>{item.name}</h3>
                            <p>{item.position}</p>
                        </div>
                        <div className="inline-flex gap-4 bg-gradient-to-r from-blue-800 to-blue-500 px-4 py-3 rounded absolute left-1/2 -translate-x-1/2 bottom-[0] opacity-0 group-hover:bottom-30 group-hover:opacity-100 transition-all duration-500 ease-in z-20">
                            {item.social.map((Icon,i) => (
                            <Icon key={i} className="text-white text-lg hover:scale-110 transition"/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
     
      <Footer/>
      <BackToTop/>
    </>
  )
}
