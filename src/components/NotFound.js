import React from 'react';
import { Navbar } from './layouts/Navbar';
import ErrImg from '../assets/notfound.svg'

export const NotFound = () => {
    return (
        <>
            <div className='h-screen'>
                <Navbar/>
                <div>
                    <img src={ErrImg} alt='Ouch! Page Not Found' />
                </div>
            </div>
        </>
    )
}