import React from 'react';
import Introducer from '../utils/introducer.svg';

export const LeftPanel  = ()=> (
    <div className='w-2/5 bg-orange-300'>
      <div className='p-10 Logo text-2xl'>AMF Parser</div>
      <div className='mx-auto my-24 flex justify-center'>
        <img src={Introducer} alt='Explainer Standing with Direction for app use'/>
      </div>
      <div className='justify-center flex'>
          <div className='item-1 text-3xl Intro-Text'>In One Click.</div>
      </div>
      <div className='small text-center m-5 Intro-Sub-Text'>Attach your AMF and get it parsed for you.</div>
    </div>
)