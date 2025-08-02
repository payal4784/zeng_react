import React from 'react'
import { teamData } from '../data/data'

export default function Team() {
  return (
    <div className='container'>
        <div className="grid grid-cols-1 text-center mb-6">
            <div>
                <h6 className='sub-title mb-3'>Team</h6>
                <h2 className='mb-4 title lg:w-1/2 w-full mx-auto'>Passionate Minds at Work</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.slice(0,4).map((item,index)=>( 
                
                <div className='relative group' key={index}>
                    <img src={item.image} alt="" />
                    <div className='text-center shadow shadow-slate-200 mx-7 bg-white p-4 rounded -mt-8 relative z-11'>
                        <h3 className='inner-title'>{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                    <div className="inline-flex gap-4 bg-gradient-to-r from-blue-800 to-blue-500 px-4 py-3 rounded absolute left-1/2 -translate-x-1/2 bottom-[0] opacity-0 group-hover:bottom-30 group-hover:opacity-100 transition-all duration-500 ease-in z-20">
                        {item.social.map((Icon, i) => (
                        <Icon key={i} className="text-white text-lg hover:scale-110 transition" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
