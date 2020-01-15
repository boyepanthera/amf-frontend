import React from 'react';
import './output.css';
import { LeftPanel } from './components/LeftPanel';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import {useDropzone} from 'react-dropzone';

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
  const [getRootProps, getInputProps, acceptedFiles] = useDropzone ()
  const files = acceptedFiles.map(
    file =>(
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    )
  )

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
            files: []
          }} 
          validationSchema = {UploadSchema}
          onSubmit = {
              values => (
                console.log(values)
            )
          }
        >
          {({errors, touched, setFieldValue}) => (
            <Form className='Parse-Form p-10'>
              <div className='block'>
                <Field name='name' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-4' placeholder='Let me know your name'/>
                {errors.name && touched.name? <Err>{errors.name}</Err>: null}
              </div>
              <div  className='block' {...getRootProps({className: 'dropzone'})}>
              <Field name='amf' type='file' className='my-5' {...getInputProps()} onChange = {event => {
                setFieldValue('files', event.currentTarget.files[0])
              }} />
              <p className='text-blue-200'>Drag and drop file or click to browse</p>
              {errors.file && touched.file? <Err>{errors.file}</Err>: null}
              </div>
              <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
              </aside>
              <button className='p-2 bg-orange-300 rounded text-sm text-white'>Parse AMF</button>
            </Form>
          )}
        </Formik>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag files here...</p>
        </div>
        <aside>
          <h4>Files:</h4>
          {/* <ul>{files}</ul> */}
        </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
