import React from 'react';
import {Navbar} from './layouts/Navbar'

export const Responsive  = ()=> {

    return(
        <div className='h-screen bg-gray-200'>
            <Navbar/>
            <div className='flex flex-wrap m-3'>
                <div className='sm:w-1/3 w-full text-white h-64 bg-orange-800'>Hi</div>
                <div className='sm:w-1/3 w-full text-white h-64 bg-teal-800'>Hello</div>
                <div className='sm:w-1/3 w-full text-white h-64 bg-red-800'>HEy</div>
            </div>
        </div>
    )
}