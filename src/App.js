import React from 'react';
import './output.css';
import { LeftPanel } from './components/LeftPanel';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const Err = styled.div (
  {
    color: 'pavioletred',
    align:'center'
  }
);

const UploadSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Name cannot be less than 3 characters')
    .max(40, 'Too Long! Name cannot be longer than 3 characters')
    .required('Required'),
  email: Yup.string()
    .required('Required, a file needs to be attached!'),
});

function App() {
  return (
    <div className="App h-screen flex">
      <LeftPanel/>
      <div className='w-3/5 bg-gray-200 text-center'>
        <Formik
          initialValues = {{
            name: '',
            file: ''
          }} 
          validationSchema = {UploadSchema}
          onSubmit = {
              values => (
                console.log(values)
            )
          }
        >
          {({errors, touched, setFieldValue}) => (
            <Form className='Parse-Form'>
              <div>
                <Field name='name' placeholder='Let me know your name'/>
                {errors.name && touched.name? <Err>{errors.name}</Err>: null}
              </div>
              <Field name='amf' type='file' onChange = {event => {
                setFieldValue('file', event.currentTarget.files[0])
              }} />
              {errors.file && touched.file? <Err>{errors.file}</Err>: null}
              <button className='p-4 bg-orange-300'>Parse AMF</button>
            </Form>
          )}
        </Formik>


      </div>
    </div>
  );
}

export default App;
