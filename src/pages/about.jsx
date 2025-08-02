import React from 'react'
import NavTop from '../components/nav-top'
import NavLight from '../components/nav-light'
import AboutUs from '../components/about'
import bg from  '../assets/images/about.jpg'
import Cta from '../components/cta'
import Team from '../components/team'
import Footer from '../components/footer'
import BackToTop from '../components/back-to-top'

export default function About() {
  return (
    <>
     <NavTop/>
     <NavLight/>
      <section className="bg-blue-900 text-white py-20 h-[500px] relative" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="overlay"></div>
        <div className="container text-center relative flex justify-center items-center h-full">
          <div>
             <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
              <p className="text-lg text-blue-200">Empowering businesses through smart technology and digital innovation.</p>
          </div>
        </div>
      </section> 
      <section className='md:py-24 py-16'>
        <AboutUs/>
      </section>

      <section className='bg-linear-80 from-blue-800 to-blue-500 py-15'>
        <Cta/>
      </section>

      <section className='md:py-24 py-16'>
        <Team/>
      </section>

      <Footer/>
      <BackToTop/>
    </>
  )
}
