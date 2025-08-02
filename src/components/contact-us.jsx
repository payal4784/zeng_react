 import React from 'react'
 import bg from '../assets/images/bg/bg-2.jpg'
 
 export default function ContactUs() {
   return (
     <section className='relative' style={{backgroundImage:`url(${bg})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className="overlay"></div>
        <div className="relative">
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div></div>
                <div className='bg-white'>
                    <div className="lg:p-8 p-4">
                        <div>
                            <h6 className='sub-title mb-3'>GET IN TOUCH</h6>
                            <h2 className='mb-4 title'>Reach Out to Morepich</h2>
                        </div>
                        <form className="space-y-5">
                            <div>
                                <label className="block mb-1 font-medium text-sm">Name</label>
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-sm">Email</label>
                                <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-sm">Message</label>
                                <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="theme-btn"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
 )}
 