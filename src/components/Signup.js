import React from "react";
import { Navbar } from "./layouts/Navbar";
import { Form, Field, Formik } from "formik";
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar />
            <div>
                <Formik>
                    <Form className='w-3/5 bg-white mx-auto max-w-md p-8 my-12 rounded-lg shadow-lg'>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className=' md:w-1/2 px-3 mb-6 md:mb-0'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='firstName'>First Name</label>
                                <Field type='text' name='firstName' placeholder='Jacob' className='h-12 w-full block border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className=' md:w-1/2 px-3'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='lastName'>Last Name</label>
                                <Field type='text' name='lastName' placeholder='Jude' className='h-12 w-full block border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className='w-full px-3 '>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='email'>Email</label>
                                <Field type='text' name='email' placeholder=' jacobjude@gtbank.com' className='h-12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 mb-2'>
                            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='password'>Password</label>
                                <Field name='password' placeholder='e.g. **********' className='h-12 w-full border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className='mb-4 md:w-1/2 px-3'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='confirmPassword'>Confirm password</label>
                                <Field name='confirmPassword' placeholder='e.g. **********' className='h-12 w-full border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                        </div>
                        <button className='w-full h-10 px-3 my-4 text-white font-semibold focus:outline-none hover:bg-orange-300 rounded-full bg-orange-500'><i className='fas mr-2 fa-sign-in-alt text-white'></i>Signup</button>
                        <div className='px-3 text-sm'>Already have an account?  <Link className='ml-2 text-purple-500' to='/'>Login instead!</Link></div>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}