import React from 'react';
import { Navbar } from './layouts/Navbar';
import ErrImg from '../assets/notfound.svg'

export const NotFound = () => {
    return (
        <>
            <div className='h-screen'>
                <Navbar />
                <div >
                    <img src={ErrImg} className='mx-auto mt-40 mb-8' height={400} width={400} alt='Ouch! Page Not Found' />
                    <div className='text-3xl font-extrabold text-center'>Not Found</div>
                    <div className='text-sm text-center'>Oops! even we have reported to police, we desperately looking for this page</div>
                </div>
            </div>
        </>
    )
}