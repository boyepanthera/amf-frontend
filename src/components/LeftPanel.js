import React from 'react';
import Uploading from '../assets/uploading.svg';

export const LeftPanel = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <div className=' p-10'>
        <div className=' my-12 min-w-full flex sm:flex-shrink-0'>
          <img className='h-64' src={Uploading} alt='Explainer Standing with Direction for app use' />
        </div>
        <div className='item-1 text-3xl text-center font-bold text-purple-700 sm:text-sm md:text-lg lg:text-2xl'>In One Click.</div>
        <div className='text-purple-600 text-center m-5 font-bold text-sm'>Attach your AMF and get it parsed for you.</div>
      </div>
    </div>
  )
} 