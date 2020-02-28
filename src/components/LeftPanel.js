import React from 'react';
import Uploading from '../assets/uploading.svg';

export const LeftPanel = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <div className=' p-10'>
        <div className=' my-20 max-w-full flex flex-shrink-0'>
          <img className=' ' height={700} width src={Uploading} alt='Explainer Standing with Direction for app use' />
        </div>
        <div className='item-1 text-3xl text-center font-bold text-orange-700 '>In One Click.</div>
        <div className='text-orange-600 text-center mx-5 mb-32 font-bold text-sm'>Attach your AMF and get it parsed for you.</div>
      </div>
    </div>
  )
} 