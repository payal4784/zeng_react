import React from 'react'
import { blogData } from '../data/data'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi'

export default function Blog() {
  return (
    <div className="container">
        <div className="grid grid-cols-1 text-center mb-6">
            <div>
                <h6 className='sub-title mb-3'>Our Blog</h6>
                <h2 className='mb-4 title lg:w-1/2 w-full mx-auto'>Latest Insights & Updates</h2>
            </div>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((item) => (
        <div key={item.id} className="bg-white rounded-lg hover:shadow-slate-200 hover:shadow-xl transition overflow-hidden group">
            <div className='overflow-hidden'>
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-5">
                <div className='inline-flex items-center gap-2'>
                    <span className="text-xs text-gray-400 mb-2 inline-flex items-center"><FiCalendar className='me-1'/>{item.date}</span>
                    <span className="text-xs text-gray-400 mb-2 inline-flex items-center"><FiUser className='me-1'/>{item.author}</span>
                </div>
                <h3 className="inner-title mb-2 hover:!text-blue-800 transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <Link to={item.link} className="hover:text-blue-800 font-medium inline-flex items-center">Read More <FiArrowRight className='ms-1'/></Link>
            </div>
        </div>
        ))}
    </div>
    </div>
  )
}
