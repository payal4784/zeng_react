import bg from  '../assets/images/about.jpg'
import NavTop from '../components/nav-top'
import NavLight from '../components/nav-light'
import { services } from '../data/data'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'
import BackToTop from '../components/back-to-top'
import Technology from '../components/technology'

export default function Contact() {
  return (
    <>
        <NavTop/>
        <NavLight/>
        <section className="bg-blue-900 text-white py-20 h-[500px] relative" style={{backgroundImage:`url(${bg})`, backgroundPosition:'center'}}>
            <div className="overlay"></div>
            <div className="container text-center relative flex justify-center items-center h-full">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-blue-200 lg:w-3/4  w-full mx-auto">Have questions? Let’s discuss your project or idea. Fill out the form and our team will get back to you soon.</p>
                </div>
            </div>
        </section> 

        <section className="md:py-24 py-16 bg-slate-50">
            <div className="container max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 shadow-sm rounded-lg">
                    <div className='p-8'>
                        <div className='mb-6'>
                            <h1 className="title mb-4">Send us a message</h1>
                            <p className="text-slate-400">Have questions? Let’s discuss your project or idea. Fill out the form and our team will get back to you soon.</p>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea rows="5" placeholder="Your Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="theme-btn">Send Message</button>
                        </form>
                    </div>

                    <div className="space-y-6 bg-blue-800/5 p-8">
                        <div className='mb-6'>
                            <h1 className="title mb-4">Contact Us</h1>
                            <p className="text-slate-400">Have questions? Let’s discuss your project or idea. Fill out the form and our team will get back to you soon.</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div className='bg-linear-80 from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transition duration-500 p-2 rounded'>
                                <FiMapPin className='size-7 text-white'/>
                            </div>
                            <div>
                                <h4 className='inner-title'>Address</h4>
                                <p className='text-slate-400 text-sm'>Morepich Technologies Pvt. Ltd<br/>123 Business Street, Surat, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div className='bg-linear-80 from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transition duration-500 p-2 rounded'>
                                <FiMail className='size-7 text-white'/>
                            </div>
                            <div>
                                <h4 className='inner-title'>Email</h4>
                                <p className='text-slate-400 text-sm'>support@morepich.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div className='bg-linear-80 from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transition duration-500 p-2 rounded'>
                                <FiPhoneCall className='size-7 text-white'/>
                            </div>
                            <div>
                                <h4 className='inner-title'>Phone</h4>
                                <p className='text-slate-400 text-sm'>+91 75675 50411</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <div className="mt-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8321722789956!2d72.88132497526239!3d21.238502680463828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f45a78a2013%3A0xa794f952c42d60e0!2sIndia%20Post!5e0!3m2!1sen!2sin!4v1752682683504!5m2!1sen!2sin" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Morepich Location"></iframe>
    </div>

        <Footer/>
        <BackToTop/> 
    </>
  )
}
