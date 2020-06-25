import React from 'react';
import Uploading from '../assets/uploading.svg';

export const LeftPanel = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <div className='p-3 sm:p-10'>
        <div className=' my-20 max-w-full flex flex-shrink-0'>
          <img className=' ' height={700} width={700} src={Uploading} alt='Explainer Standing with Direction for app use' />
        </div>
        <div className='text-xl sm:text-2xl md:text-3xl text-center font-bold text-orange-700 '>In One Click.</div>
        <div className='text-orange-600 text-center mx-5 mb-32 font-bold text-sm'>From AMF to Finstat.</div>
      </div>
    </div>
  )
} 