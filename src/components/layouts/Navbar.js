import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center flex-wrap p-4 bg-purple-700'>
            <div>
                <div className='flex items-center text-white flex-shrink-0'>
                    <span className='tracking-tight font-bold text-xl'><Link to='/'>AMF Parser</Link></span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-purple-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow ml-auto">
                    <Link to='/newauth' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">SignUp</Link>
                    <Link to='/parse' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">Parse</Link>
                </div>
                <div>
                    <Link to='/dashboard' class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0">Dashboard</Link>
                </div>
            </div>
        </nav>
    )
}