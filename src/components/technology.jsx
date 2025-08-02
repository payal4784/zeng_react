import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { backend, database, frontend, mobile } from '../data/data';

export default function Technology() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <div className='container'>
        <div className="grid grid-cols-1 text-center mb-6">
            <div>
                <h6 className='sub-title mb-3'>Technology</h6>
                <h2 className='mb-4 title lg:w-1/2 w-full mx-auto'>Technologies We Specialize In</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 text-center mb-7">
            <div className='flex flex-wrap gap-3 justify-center'>
                <Link onClick={()=>setActiveTab(1)} className={`text-sm font-medium px-3 py-1 rounded-full border border-blue-800  ${activeTab === 1 ? 'text-white bg-linear-80 from-blue-800 to-blue-500' : 'text-blue-800'}`}>Front End</Link>
                <Link onClick={()=>setActiveTab(2)} className={`text-sm font-medium px-3 py-1 rounded-full border border-blue-800  ${activeTab === 2 ? 'text-white bg-linear-80 from-blue-800 to-blue-500' : 'text-blue-800'}`}>Backend</Link>
                <Link onClick={()=>setActiveTab(3)} className={`text-sm font-medium px-3 py-1 rounded-full border border-blue-800  ${activeTab === 3 ? 'text-white bg-linear-80 from-blue-800 to-blue-500' : 'text-blue-800'}`}>Mobile</Link>
                <Link onClick={()=>setActiveTab(4)} className={`text-sm font-medium px-3 py-1 rounded-full border border-blue-800  ${activeTab === 4 ? 'text-white bg-linear-80 from-blue-800 to-blue-500' : 'text-blue-800'}`}>Database</Link>
            </div>
        </div>
        <div>
            {activeTab === 1 && 
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 mx-auto" >
                    {frontend.map((item,index)=>{
                        return(
                            <div className='p-5 border border-blue-100 rounded text-center' key={index}>
                                <img src={item.image} alt="" className='size-22 mx-auto'/>
                                <p className='inner-title mt-5'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            }
            {activeTab === 2 && 
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 mx-auto" >
                    {backend.map((item,index)=>{
                        return(
                            <div className='p-5 border border-blue-100 rounded text-center' key={index}>
                                <img src={item.image} alt="" className='size-22 mx-auto'/>
                                <p className='inner-title mt-5'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            }
            {activeTab === 3 && 
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5" >
                    {mobile.map((item,index)=>{
                        return(
                            <div className='p-5 border border-blue-100 rounded text-center' key={index}>
                                <img src={item.image} alt="" className='size-22 mx-auto'/>
                                <p className='inner-title mt-5'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            }
            {activeTab === 4 && 
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5" >
                    {database.map((item,index)=>{
                        return(
                            <div className='p-5 border border-blue-100 rounded text-center' key={index}>
                                <img src={item.image} alt="" className='size-22 mx-auto'/>
                                <p className='inner-title mt-5'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            }
           
            
        </div>
    </div>
  )
}
