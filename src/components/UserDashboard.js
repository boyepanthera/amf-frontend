import React from 'react';
import { Navbar } from "./layouts/Navbar";

export const UserDashboard = () => {
    return (
        <div className="min-h-screen h-full">
            <div className="mb-2 w-full">
                <Navbar />
            </div>
            <div className="bg-blue-800 sm:flex sm:flex-wrap w-full h-full inset-0">
                <div className='bg-orange-300 w-full h-full min-w-full sm:w-1/3'>
                    Hey I am the first part of your dashboard
                </div>
                <div className="bg-orange-500 w-full h-full min-w-full sm:w-2/3">
                    <div>You need me to update your details</div>
                </div>
            </div>
        </div>
    )
}