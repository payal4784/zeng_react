import React from 'react'
import NavTop from '../../components/nav-top'
import NavLight from '../../components/nav-light'
import BannerOne from '../../components/banner-one'
import Cta from '../../components/cta'
import About from '../../components/about'
import Services from '../../components/services'
import Technology from '../../components/technology'
import Client from '../../components/client'
import Team from '../../components/team'
import Footer from '../../components/footer'
import ContactUs from '../../components/contact-us'
import BackToTop from '../../components/back-to-top'
import bg from  '../../assets/images/bg/bg-4.jpg'
import Blog from '../../components/blog'
import Faq from '../../components/faq'

export default function HomeOne() {
  return (
    <>
        <NavTop/>
        <NavLight/>
        <BannerOne/>
        <section className='bg-linear-80 from-blue-800 to-blue-500 py-15'>
          <Cta/>
        </section>
        <section className='md:py-24 py-16'>
          <About/>
        </section>
        <section className='md:py-24 py-16 bg-blue-800/5'>
          <Services/>
        </section>
        <section className='md:py-24 py-16'>
          <Technology/>
        </section>
        <section className='md:py-24 py-16 bg-blue-800/5 relative' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundAttachment:'fixed' }}>
          <div className="overlay"></div>
          <Client/>
        </section>
        <section className='md:py-24 py-16'>
          {/* <Team/> */}
          <Faq/>
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
