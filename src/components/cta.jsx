import React from 'react'
import { counterData } from '../data/data'
import CountUp from 'react-countup';

export default function Cta() {
  return (
    <div className='container '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {counterData.map((item,index)=>{
                return(
                    <div className='text-center' key={index}>
                        <h3 className='text-white text-5xl font-bold'><CountUp end={item.value} duration={5}/>{item.symbol}</h3>
                        <p className='text-slate-300 pt-4'>{item.title}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
