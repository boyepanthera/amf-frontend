import React from 'react';
import Introducer from '../utils/introducer.svg';

export const LeftPanel  = ()=>{

  return (
    <div>
      <div className='p-10 text-purple-800 font-extrabold text-2xl'>AMF Parser</div>
        <div className='mx-auto my-24 flex justify-center md:flex-shrink-0'>
          <img className='rounded-lg md:w-80 ' src={Introducer} alt='Explainer Standing with Direction for app use'/>
        </div>
      <div className='justify-center flex'>
          <div className='item-1 text-3xl text-center font-bold text-purple-800'>In One Click.</div>
      </div>
      <div className='text-purple-700 text-center m-5 font-bold text-sm'>Attach your AMF and get it parsed for you.</div>
    </div>
)
} 