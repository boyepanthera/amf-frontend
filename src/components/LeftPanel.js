import React from 'react';
import Uploading from '../assets/uploading.svg'

export const LeftPanel  = ()=>{
  return (
    <div>
      <div className='p-10 text-purple-700 font-extrabold text-2xl tracking-wide uppercase'>Parser</div>
        <div className='mx-auto my-12 flex justify-center md:flex-shrink-0'>
          <img className='h-64' src={Uploading} alt='Explainer Standing with Direction for app use'/>
        </div>
          <div className='item-1 text-3xl text-center font-bold text-purple-700'>In One Click.</div>
        <div className='text-purple-600 text-center m-5 font-bold text-sm'>Attach your AMF and get it parsed for you.</div>
    </div>
  )} 