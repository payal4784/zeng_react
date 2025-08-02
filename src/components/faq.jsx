import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqData } from '../data/data';

export default function Faq() {
const [activeIndex, setActiveIndex] = useState(0);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
};
  return (
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className='col-span-12 md:col-span-4'>
                    <h6 className='sub-title mb-3'>FAQs</h6>
                    <h2 className='mb-4 title'>Frequently Asked Questions</h2>
                    <p className='text-slate-400'>Find answers to the most common questions about our services and processes.</p>
                </div>
                <div className='col-span-12 md:col-span-8'>
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white shadow-sm shadow-slate-200 rounded-lg overflow-hidden mb-2">
                            <button onClick={() => toggleFAQ(index)} className={`w-full flex justify-between items-center px-6 py-4 text-left  inner-title hover:bg-blue-50 transition ${activeIndex === index ? 'bg-blue-50 !text-blue-800' : ''}`}>
                                {item.question}
                                {activeIndex === index ? ( <FaChevronUp className="text-blue-800 size-3" />) : (<FaChevronDown className="text-blue-800 size-3" />)}
                            </button>
                            {activeIndex === index && (
                                <div className="px-6 py-4 text-slate-400">
                                {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
