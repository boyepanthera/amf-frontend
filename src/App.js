import React from 'react';
import './output.css';
import {useDropzone} from 'react-dropzone';
import { LeftPanel } from './components/LeftPanel';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

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
      <div className='w-3/5 bg-gray-200 flex justify-center'>
        <div className='mx-auto my-auto'>
          <div className='Form-Header'>
            <div className='text-center p-5 text-white Form-Header-Text'>The Magic Happens Here</div>
          </div>
          <Formik 
          initialValues = {{
            name: '',
            file: []
          }} 
          validationSchema = {UploadSchema}
          onSubmit = {
              values => (
                console.log(values)
            )
          }
        >
          {({errors, touched}) => (
            <Form className='Parse-Form p-10'>
              <div className='block'>
                <label htmlFor='name'>Name</label>
                <Field name='name' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-4' placeholder='Let me know your name'/>
                {errors.name && touched.name? <Err>{errors.name}</Err>: null}
              </div>
              <div className='border-dashed border-2 my-4 p-5 '>
                <div  className='' {...getRootProps({className:'dropzone'})}>
                  <input name='file' type='file' className='my-5' {...getInputProps()} />
                  <p className='text-center text-blue-300'>Drag and drop files or click to browse</p>
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                  {errors.file && touched.file? <Err>{errors.file}</Err>: null}
                </div>
              </div>
              <button type='submit' className='p-2 bg-orange-300 rounded text-sm text-white justify-center flex'>Parse AMF</button>
            </Form>
          )}
        </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
