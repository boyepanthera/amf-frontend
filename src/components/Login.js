import React from "react";
import { Form, Field, Formik } from "formik";
import { Navbar } from "./layouts/Navbar";
// import axios from 'axios';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='bg-gray-400 h-screen'>
      <Navbar />
      <div className="bg-gray-400">
        <Formik>
          <Form className="bg-white p-8 w-full mx-auto p-8 mt-32 mb-64 max-w-md w-1/4 rounded-lg">
            <div className="text-center text-2xl mb-4">SignIn </div>
            <div className="mb-4 block ">
              <label className="block text-gray-700 text-sm font-bold">
                Email
              </label>
              <Field
                className="w-full h-8"
                type="email"
                placeholder="your email here"
              />
            </div>
            <div className="mb-4 block">
              <label className="block text-gray-700 text-sm font-bold">
                Password
              </label>
              <Field
                className="w-full h-8"
                type="password"
                placeholder="your password here"
              />
            </div>
            <button className="bg-purple-700 hover:bg-purple-500 focus:outline-none px-4 w-full py-2 rounded-full my-4 text-white">
              Login
            </button>
            <div className='font-semibold text-sm'><span>Have no account?</span> <Link className='text-purple-500 text-right' to='/newauth'>Signup here</Link></div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
