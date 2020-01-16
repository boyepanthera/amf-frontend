import React, {useState} from 'react';
import Introducer from '../utils/introducer.svg';
import {motion} from 'framer-motion';

export const LeftPanel  = ()=>{
  const [hovered, setHovered] = useState(false)

  return (
    <div>
      <div className='p-10 Logo text-2xl'>AMF Parser</div>
     
        <div className='mx-auto my-24 flex justify-center md:flex-shrink-0'>
          <img filter="url(#blur)"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}  className='rounded-lg md:w-80 ' src={Introducer} alt='Explainer Standing with Direction for app use'/>
        <filter id="blur">
        <motion.feGaussianBlur
          initial={false}
          animate={{ stdDeviation: hovered ? 0 : 2 }}
        />
      </filter>
        </div>
    
      <div className='justify-center flex'>
          <div className='item-1 text-3xl Intro-Text'>In One Click.</div>
      </div>
      <div className='small text-center m-5 Intro-Sub-Text'>Attach your AMF and get it parsed for you.</div>
    </div>
)
} 