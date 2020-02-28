import React from "react";
import { Navbar } from "./layouts/Navbar";

export const Dashboard = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar />
            <div className='flex'>
                <div>
                    <div>Hello I am the Dashboard</div>
                </div>
            </div>
        </div>
    )
}
