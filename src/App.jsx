import { Route, Routes } from 'react-router-dom'
import './assets/css/tailwind.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import HomeOne from './pages/index/home-one';
import About from './pages/about';
import PageServices from './pages/page-services';
import Projects from './pages/projects';
import Teams from './pages/teams';
import Contact from './pages/contact';
import HomeTwo from './pages/index/home-two';
import HomeThree from './pages/index/home-three';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeOne/>}/>
        <Route path='/home-2' element={<HomeTwo/>}/>
        <Route path='/home-3' element={<HomeThree/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<PageServices/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/team' element={<Teams/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
