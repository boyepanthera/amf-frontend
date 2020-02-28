import React from "react";
import { Form, Field, Formik } from "formik";
import { Navbar } from "./layouts/Navbar";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export const Login = () => {
  let LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Not a valid mail format')
      .required('Email is required field'),
    password: Yup.string()
      .min(8, 'Password is too short, minimum of 8 characters!')
      .required('Password cannot be empty')
      .matches(/[a-zA-Z]/, 'Password can only contain latin letters'),
  })
  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className='bg-gray-200 h-screen'>
      <Navbar />
      <div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) =>
            <Form className="bg-white p-8 w-full mx-auto p-8 mt-32 mb-64 max-w-md w-1/4 shadow-lg rounded-lg">
              <div className="mb-4 mt-4 block ">
                <label className="block text-gray-700 text-sm font-bold">
                  Email
                </label>
                <Field
                  className="h-12 w-full block border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="johnjude@gmail.com"
                  name='email'
                />
                {errors.email && touched.email ? (<div className='text-red-400 text-sm'>{errors.email}</div>) : null}
              </div>
              <div className="mb-4 block">
                <label className="block text-gray-700 text-sm font-bold">
                  Password
              </label>
                <Field
                  className="h-12 w-full block border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  placeholder="e.g. *******"
                  name='password'
                />
                {errors.password && touched.password ? (<div className='text-red-400 text-sm'>{errors.password}</div>) : null}
              </div>
              <button className="bg-orange-500 font-bold hover:bg-orange-400 focus:outline-none px-4 w-full py-2 rounded-full my-4 text-white">
                Login <i className='fas ml-2 fa-sign-in-alt text-white'></i>
              </button>
              <div className='text-sm'><span>Have no account?</span> <Link className='text-purple-500 text-right' to='/newauth'>Signup here</Link></div>
            </Form>
          }
        </Formik>
      </div>
    </div>
  );
};
