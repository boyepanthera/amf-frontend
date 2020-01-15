import React from 'react';
import './output.css';
import {useDropzone} from 'react-dropzone';
import { LeftPanel } from './components/LeftPanel';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import {motion} from 'framer-motion';

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
  email: Yup.string()
    .required('Required, a file needs to be attached!'),
});

function App() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path} className='small'>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="App h-screen flex">
      <LeftPanel/>
      <div className='w-3/5 bg-gray-200 flex justify-center sm:w-1/2'>
        <div className='mx-auto my-auto'>
          <Formik 
          initialValues = {{
            name: '',
            file: {}
          }} 
          validationSchema = {UploadSchema}
          onSubmit = {
              values => (
                console.log(values)
            )
          }
        >
          {({errors, touched}) => (
            <motion.div 
            animate={{
              x:0,
            }}
            transition={{duration:5}}
            
            >
               <Form className='Parse-Form rounded-b-lg '>
              <div className='Form-Header'>
                <h4 className='Form-Header-Text p-5 justify-center'>The magic happens here!</h4>
              </div>
              <div className='p-8'>
              <div className='block'>
                <label htmlFor='name'>Name</label>
                <Field name='name' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-4' placeholder='Let me know your name'/>
                {errors.name && touched.name? <Err>{errors.name}</Err>: null}
              </div>
              {/* <section className='max-h-10  border-dashed border-blue-200 border-2 my-4'>
                <div  className='' {...getRootProps({className:'dropzone'})}>
                  <input name='file' type='file' {...getInputProps()} />
                  <aside>
                  <p className='text-center text-blue-300 p-4'>Drag and drop files or click to browse</p>
                    <ul>{files}</ul>
                  </aside>
                  {errors.file && touched.file? <Err>{errors.file}</Err>: null}
                </div>
              </section> */}
              <button type='submit' className='p-2 bg-orange-300 rounded text-sm text-white justify-center flex'>Parse AMF</button>
              </div>
            </Form>            
            </motion.div>
           
          )}
        </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
