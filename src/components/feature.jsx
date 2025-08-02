import React from 'react'
import { feature } from '../data/data'

export default function Feature() {
  return (
    <div className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {feature.slice(0,4).map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className='bg-white py-8 px-6 group text-center shadow-xs shadow-gray-200 rounded relative overflow-hidden' key={index}>
                        <Icon className='mx-auto text-blue-800 size-10'/>
                        <h3 className='text-lg font-medium pt-5 pb-4 cursor-pointer group-hover:text-blue-800'>{item.title}</h3>
                        <p className='text-slate-400'>{item.desc}</p>
                        <div className="icon-lg absolute -right-3 -bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <Icon className='mx-auto group-hover:text-blue-800 opacity-10 size-25'/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

