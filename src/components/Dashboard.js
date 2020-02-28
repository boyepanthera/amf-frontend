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
                        <Form className='bg-white w-1/4 px-4 py-8 mx-auto my-32'>
                            <div>
                                <label>Old GL Code</label>
                                <Field name='oldCode' type='text' placeholder='' className='w-full rounded border border-gray-200 focus:border-gray-200' />
                                {errors.name && touched.name ? (<div className='text-red-300'>{errors.name}</div>) : null}
                            </div>
                            <div>
                                <label>GL Name</label>
                                <Field type='text' name='glName' placeholder='' className='w-full rounded border border-gray-200 focus:border-gray-200' />
                                {errors.glName && touched.glName ? (<div className='text-red-300'>{errors.glName}</div>) : null}
                            </div>
                            <div>
                                <label>Final to use</label>
                                <Field type='text' name='finalCode' placeholder='' className='w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ' />
                                {errors.finalCode && touched.finalCode ? (<div className='text-red-300'>{errors.finalCode}</div>) : null}
                            </div>
                            <div>
                                <label>The CR/Dr Code on it</label>
                                <Field type='text' placeholder='' name='sideCode' className='w-full rounded border focus:border-gray-500 ' />
                                {errors.sideCode && touched.sideCode ? (<div className='text-red-300'>{errors.sideCode}</div>) : null}
                            </div>
                            <div>
                                <label>Dr/Cr</label>
                                <Field type='text' name='side' placeholder='' className='w-full rounded border focus:border-gray-500 ' />
                                {errors.side && touched.side ? (<div className='text-red-300'>{errors.side}</div>) : null}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
