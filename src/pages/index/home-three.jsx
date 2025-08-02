import React from 'react'
import NavTop from '../../components/nav-top'
import NavLight from '../../components/nav-light'
import BannerThree from '../../components/banner-three'
import Navbar from '../../components/navbar'
import Feature from '../../components/feature'
import About from '../../components/about'
import Cta from '../../components/cta'
import bg from  '../../assets/images/bg/bg-4.jpg'
import ServicesThree from '../../components/services-three'
import Client from '../../components/client'
import Blog from '../../components/blog'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer'
import BackToTop from '../../components/back-to-top'

export default function HomeThree() {
  return (
    <>
        <NavTop/>
        <Navbar/>  
        <BannerThree/> 

        <section className='relative md:py-24 py-16'>
          <Feature/>
        </section>

        <section className='md:pb-24 pb-16'>
          <About/>
        </section>

        <section className='bg-linear-80 from-blue-800 to-blue-500 relative py-15' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
          <div className="overlay"></div>
          <Cta/>
        </section>

        <section className='md:py-24 py-16 bg-blue-800/5'>
          <ServicesThree/>
        </section>

        <section className='md:py-24 py-16 bg-blue-800/5 relative' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundAttachment:'fixed' }}>
          <div className="overlay"></div>
          <Client/>
        </section>

        <section className='md:py-24 py-16 bg-blue-800/5'>
          <Blog/>
        </section>
        <ContactUs/>
        <Footer/>

        <BackToTop/>
    </>
  )
}
