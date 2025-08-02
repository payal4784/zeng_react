import bg from  '../assets/images/about.jpg'
import NavTop from '../components/nav-top'
import NavLight from '../components/nav-light'
import { services } from '../data/data'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'
import BackToTop from '../components/back-to-top'
import Technology from '../components/technology'

export default function PageServices() {
  return (
    <>
        <NavTop/>
        <NavLight/>
        <section className="bg-blue-900 text-white py-20 h-[500px] relative" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
            <div className="overlay"></div>
            <div className="container text-center relative flex justify-center items-center h-full">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
                    <p className="text-lg text-blue-200">Empowering businesses through smart technology and digital innovation.</p>
                </div>
            </div>
        </section> 
        <section className='md:py-24 py-16'>
            <div className='container'>
                <div className="grid grid-cols-1 text-center mb-6">
                    <div>
                        <h6 className='sub-title mb-3'>Services</h6>
                        <h2 className='mb-4 title lg:w-1/2 w-full mx-auto'>Custom IT Solutions for Your Successful Business</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item,index)=>{
                        let Icon= item.icon
                        return(
                            <div className='group text-center shadow-xs shadow-gray-200 rounded relative transition duration-1000'>
                                <div className='py-8 px-6 ' key={index}>
                                    <Icon className='size-12 mx-auto text-blue-800'/>
                                    <h3 className='inner-title pt-5 pb-4 cursor-pointer group-hover:text-blue-800'>{item.title}</h3>
                                    <p className='text-slate-400'>{item.desc}</p>
                                </div>
                            <div className='absolute top-0 left-0 w-0 h-full group-hover:w-full transition-all duration-1000 ease-in-out z-0 overflow-hidden rounded'>
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-blue-950/50 flex justify-center items-center'>
                                        <Link to='/services' className='theme-btn flex items-center'>Read More<FiArrowRight className='ms-2'/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center mt-7">
                    <Link className='theme-btn inline-flex items-center'>Read More<FiArrowRight className='ms-2'/></Link>
                </div>
            </div>
        </section>  

        <section className='md:py-24 py-16 bg-blue-800/5'>
            <Technology/>
        </section>

        <Footer/>
        <BackToTop/> 
    </>
  )
}
