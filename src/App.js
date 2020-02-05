import React from 'react';
import './output.css';
import {useDropzone} from 'react-dropzone';
import {LeftPanel} from './components/LeftPanel';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

const Err = styled.div (
  {
    color: 'red',
  }
);

const UploadSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Name cannot be less than 3 characters')
    .max(40, 'Too Long! Name cannot be longer than 3 characters')
    .required('Required Name is required'),
  file: Yup.string()
    .required('Required, a file needs to be attached!'),
  email: Yup.string()
  .email('This is not a valid email')
  .required('Email is a required field')
});

function App() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path} className='text-xs'>
      {file.path} - {file.size/1000} kb
    </li>
  ));

  const handleSubmit = (values) => {
    console.log(values);
    const {name, email, file} = values;
    const data  = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('file', file);
    axios.post('http://localhost:5003/amf/csv', data, { headers : {"Accept": "multipart/form-data"}})
    .then(response => console.log(response))
  }
  
  return (
    <div className="App h-screen md:flex">
      <div className='w-2/5 bg-gray-300 '>
        <LeftPanel  />
      </div>
      <div className='w-3/5 bg-gray-200 flex justify-center'>
        <div className=''>
          <Formik 
          initialValues = {{
            name: '', email:'',
            file: {},
          }} 
          validationSchema = {UploadSchema}
          onSubmit = { handleSubmit }
        >
          {({errors, touched, setFieldValue}) => (
               <Form className='rounded-b-full w-11/12 bg-white pb-8 mx-auto my-24'>
              <div className='bg-purple-700  p-5'>
                <div className='text-white text-center capitalize font-bold text-xl'>It happens here!</div>
              </div>
              <div className='px-12 py-2 my-6'>
              <div className='mb-8'>
                <label className='text-xs' htmlFor='name'>Name</label>
                <Field name='name' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-xs py-2 px-4 block w-full appearance-none leading-normal mb-2' placeholder='Let me know your name'/>
                {errors.name && touched.name? <Err className='text-sm'>{errors.name}</Err>: null}
              </div>
              <div className='mb-8'>
                <label className='text-xs' htmlFor='email'>Email</label>
                <Field name='email' type='email' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-xs py-2 px-4 block w-full appearance-none leading-normal mb-2' placeholder='Your email goes here...'/>
                {errors.email && touched.email? <Err className='text-sm'>{errors.email}</Err>: null}
              </div>
              <div className='mb-8'>
              <section className='border-dashed h-20 border-gray-400 border-2 mt-6'>
                <div  className='' {...getRootProps({className:'dropzone'})}>
                  <input name='file' className='hidden' type='file' {...getInputProps({onChange: function(e){setFieldValue('file', e.currentTarget.files[0])}})} />
                  {/* <aside> */}
                  <p className='text-center text-sm p-4 text-blue-300'>Drag and drop files or click to browse</p>
                  {/* </aside> */}
                  {errors.file && touched.file? <Err className='text sm'>{errors.file}</Err>: null}
                </div>
              </section>
                <ul>{files}</ul>
              </div>
              <div className='mt-12 justify-center flex h-10'>
              <button type='submit' className='w-full font-bold bg-purple-600 mx-8 rounded-full hover:bg-purple-800 focus:outline-none shadow-xl text-white'>Parse </button>
              </div>
              </div>
            </Form>            
          )}
        </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
