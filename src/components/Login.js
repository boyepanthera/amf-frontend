import React from 'react';
import { Form, Field, Formik } from 'formik';
import { Navbar } from './layouts/Navbar';
// import axios from 'axios';

export const Login = () => {
    return (
        <>
            <Navbar />
            <div>
                <Formik>
                    <Form className='bg-white p-4'>
                        <div className='items-center justify-center'>Sign In </div>
                        <div className='mb-4 block'>
                            <label>Email</label>
                            <Field type='email' placeholder='your email here' />
                        </div>
                        <div className='mb-4 block'>
                            <label>Password</label>
                            <Field type='password' placeholder='your password here' />
                        </div>
                        <button className='bg-purple-700 px-4 py-2 rounded-lg text-white'>Login</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}