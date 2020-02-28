import React from "react";
import { Navbar } from "./layouts/Navbar";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const Dashboard = () => {
    let DashSchema = Yup.object().shape({
        oldCode: Yup.string()
            .test('len', 'Old code has to be exactly four characters!', val => val.length === 4)
            .required('Old ledger code cannot be empty'),
        glName: Yup.string()
            .min(2, 'Too short, Group ledger name has minimum of 2 characters!')
            .required('Group ledger code cannot be empty'),
        finalCode: Yup.string()
            .test('len', 'New  ledger code has to be exactly 4 characters!', val => val.length === 4)
            .required('New ledger code cannot be empty'),
        // sideCode: Yup.string()
        //     .min(8, 'Password is too short, minimum of 8 characters!')
        //     .required('Password cannot be empty'),
        side: Yup.string()
            .test('len', 'Not allowed, side has to be two characters Dr/Cr!', val => val.length === 2)
            .required('Side cannot be empty'),
    })
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar />
            <div className='w-4/5 mx-auto'>
                <Formik
                    initialValues={{
                        oldColde: '',
                        glName: '',
                        finalCode: '',
                        // sideCode: '',
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
                                    <Field name='oldCode' type='text' placeholder='' className='h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                                    {errors.oldCode && touched.oldCode ? (<div className='text-red-300'>{errors.oldCode}</div>) : null}
                                </div>
                                <div className='w-full md:w-2/5 px-2 mb-6 md:mb-0'>
                                    <label>GL Name</label>
                                    <Field type='text' name='glName' placeholder='' className='h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                                    {errors.glName && touched.glName ? (<div className='text-red-300'>{errors.glName}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>Final GL to use</label>
                                    <Field type='text' name='finalCode' placeholder='' className='h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ' />
                                    {errors.finalCode && touched.finalCode ? (<div className='text-red-300'>{errors.finalCode}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/5 px-2 mb-6 md:mb-0'>
                                    <label>Side(Dr/Cr)</label>
                                    <Field type='text' name='side' placeholder='' className='h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
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
