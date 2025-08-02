import React from 'react'
import NavTop from '../components/nav-top'
import NavLight from '../components/nav-light'
import bg from  '../assets/images/about.jpg'

import Footer from '../components/footer'
import BackToTop from '../components/back-to-top'
import { projectData } from '../data/data'

export default function Projects() {
  return (
    <>
     <NavTop/>
     <NavLight/>
      <section className="bg-blue-900 text-white py-20 h-[500px] relative" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
        <div className="overlay"></div>
        <div className="container text-center relative flex justify-center items-center h-full">
          <div>
             <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
              <p className="text-lg text-blue-200">Empowering businesses through smart technology and digital innovation.</p>
          </div>
        </div>
      </section> 

    <section className="md:py-24 py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projectData.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-950/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center transition-all duration-500">
                <div className='bg-linear-80 from-blue-800 to-blue-500 p-4 rounded'>
                  <p className="text-sm text-blue-300 mb-1">{project.category}</p>
                  <h3 className="!text-white inner-title">{project.title}</h3>
                </div>
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
