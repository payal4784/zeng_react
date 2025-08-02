import React from 'react'
import NavTop from '../../components/nav-top'
import NavLight from '../../components/nav-light'
import BannerTwo from '../../components/banner-two'
import Feature from '../../components/feature'
import About from '../../components/about'
import ServicesTwo from '../../components/services-two'
import bg from  '../../assets/images/bg/bg-4.jpg'
import Technology from '../../components/technology'
import Team from '../../components/team'
import Cta from '../../components/cta'
import Blog from '../../components/blog'
import Footer from '../../components/footer'
import BackToTop from '../../components/back-to-top'

export default function HomeTwo() {
  return (
    <>
      <NavTop/>
      <NavLight/>
      <BannerTwo/>

      <section className='relative -top-25'>
        <Feature/>
      </section>

      <section className='md:pb-24 pb-16'>
        <About/>
      </section>

      <section className='md:py-24 py-16 bg-blue-800/5 relative' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="overlay"></div>
        <ServicesTwo/>
      </section>

      <section className='md:py-24 py-16'>
        <Technology/>
      </section>

      <section className='md:py-24 py-16 bg-blue-800/5'>
        <Team/>
      </section>

      <section className='bg-linear-80 from-blue-800 to-blue-500 py-15'>
        <Cta/>
      </section>

      <section className='md:py-24 py-16 bg-blue-800/5'>
        <Blog/>
      </section>
      <Footer/>

      <BackToTop/>
    </>
  )
}
