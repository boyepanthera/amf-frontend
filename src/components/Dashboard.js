import React from "react";
import { Navbar } from "./layouts/Navbar";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const Dashboard = () => {
    let DashSchema = Yup.object().shape({
        oldCode: Yup.string()
            .min(8, 'Password is too short, minimum of 8 characters!')
            .required('Password cannot be empty'),
        glName: Yup.string()
            .min(8, 'Password is too short, minimum of 8 characters!')
            .required('Password cannot be empty'),
        finalCode: Yup.string()
            .min(8, 'Password is too short, minimum of 8 characters!')
            .required('Password cannot be empty'),
        sideCode: Yup.string()
            .min(8, 'Password is too short, minimum of 8 characters!')
            .required('Password cannot be empty'),
        side: Yup.string()
            .min(8, 'Password is too short, minimum of 8 characters!')
            .required('Password cannot be empty'),
    })
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar />
            <div>
                <div className='mx-auto'>
                    Hey Table over here
                </div>
            </div>
            <div className='w-2/3 mx-auto'>


                <Formik
                    initialValues={{
                        oldColde: '',
                        glName: '',
                        finalCode: '',
                        sideCode: '',
                        side: ''
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={DashSchema}
                >
                    {({ errors, touched }) => (
                        <Form className='bg-white w-full px-12 rounded-lg shadow-xl py-8 mx-auto my-32'>
                            <div className='flex flex-wrap -mx-3 mb-2'>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>Old GL Code</label>
                                    <Field name='oldCode' type='text' placeholder='' className='h-10 w-full rounded border border-gray-200 focus:border-gray-200' />
                                    {errors.name && touched.name ? (<div className='text-red-300'>{errors.name}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>GL Name</label>
                                    <Field type='text' name='glName' placeholder='' className='h-10 w-full rounded border border-gray-200 focus:border-gray-200' />
                                    {errors.glName && touched.glName ? (<div className='text-red-300'>{errors.glName}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>Final to use</label>
                                    <Field type='text' name='finalCode' placeholder='' className='h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ' />
                                    {errors.finalCode && touched.finalCode ? (<div className='text-red-300'>{errors.finalCode}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>The CR/Dr Code on it</label>
                                    <Field type='text' placeholder='' name='sideCode' className='h-10 w-full rounded border focus:border-gray-500 ' />
                                    {errors.sideCode && touched.sideCode ? (<div className='text-red-300'>{errors.sideCode}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>Dr/Cr</label>
                                    <Field type='text' name='side' placeholder='' className='h-10 w-full rounded border focus:border-gray-500 ' />
                                    {errors.side && touched.side ? (<div className='text-red-300'>{errors.side}</div>) : null}
                                </div>
                                <div className='flex ml-auto mr-2 my-8'>
                                    <button className='bg-orange-500 rounded-md px-4 py-2 text-white'>Add Change</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
