import React , {useState} from 'react';
import '../output.css';
import {useDropzone} from 'react-dropzone';
import {LeftPanel} from './LeftPanel';
import {Field, Form, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import download from 'downloadjs';
import CloudDownloadIcon  from '@material-ui/icons/CloudDownload';

const Err = styled.div (
  {
    color: 'red',
  }
);

const UploadSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Name cannot be less than 3 characters')
    .max(40, 'Too Long! Name cannot be longer than 40 characters')
    .required('Required Name is required'),
  file: Yup.string()
    .required('Required, a file needs to be attached!'),
  email: Yup.string()
  .email('This is not a valid email')
  .required('Email is a required field')
});

export function Home() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [loading, setLoading] = useState(false);
  // const [flash,  setFlash] = useState (false);
  const [fileUp, setFileUp] = useState(false);
  const [err, setErr] = useState(null);
  let [submitted, setSubmit] = useState(false);
  const [response, setResponse] = useState(false);
  const files = acceptedFiles.map(file => (
    <li key={file.path} className='text-xs focus:outline-none'>
      {file.path} - {file.size/1000} kb
    </li>
  ));

  const handleSubmit = (values) => {
    console.log(values);
    setLoading(true)
    const {name, email, file} = values;
    const data  = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('file', file);
    axios.post('http://localhost:5003/amf/csv', data, { headers : {"Accept": "multipart/form-data"}})
    .then(response => {
      console.log(response)
      // console.log(response.data.downloadPath);
      setSubmit(true)
      setResponse(response.data.downloadPath)
    })
    .catch(err=> {
      setErr(err);
      setLoading(false);
      setTimeout( ()=>setErr(false), 5000);
    })
  }

  const downloadFile = async event => {
    try {const filename =  event.target.innerText;
      const res = await fetch (`http://localhost:5003/files/${filename}`);
      const blob = await res.blob();
      download (blob, filename);
    } catch (err) {
      setErr(err);
    } 
  }
  
  if(submitted){
    return (
      <div className="App h-screen md:flex">
      <div className='w-2/5 bg-gray-300 '>
        <LeftPanel  />
      </div>
      <div className='w-3/5 bg-gray-200 flex justify-center'>
        <div className='bg-white h-auto rounded-b-full w-1/3 my-40'>
          <div className='bg-purple-700  p-5'>
            <div className='text-white text-center capitalize font-bold text-xl'>Voila! Parsing Done...</div>
          </div>
          <div className='my-20 mx-10' onClick={downloadFile}>
            <div className='border-dashed border-2 border-purple-800 py-8 px-3' >
              <div className ='mx-20 my-0 text-purple-700' >
                <CloudDownloadIcon  color='inherit' fontSize='large'/>
              </div>
                <p className='text-center text-xs text-purple-600'>{response}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className="App h-screen md:flex">
      <div className='w-2/5 bg-gray-300 '>
        <LeftPanel  />
      </div>
      <div className='w-3/5 bg-gray-200'>
      <div className='w-1/2 justify-center max-w-sm mx-auto px-auto'>
      <div className='mt-20 mb-4'>
      {err ? (
        <div className="bg-red-100 mb-0 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold ">{err.message} </strong>
          <span className="block sm:inline text-sm"> There was an issue.</span>
          <span onClick={()=>setErr(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
        ) : null}
        </div>
          <Formik 
          initialValues = {{
            name: '', email:'',
            file: {}, 
          }} 
          validationSchema = {UploadSchema}
          onSubmit = { handleSubmit }
        >
          {({errors, touched, setFieldValue}) => (
               <Form className='rounded-b-full w-11/12 bg-white pb-8 mx-auto mt-0 mb-24'>
              <div className='bg-purple-700  p-5'>
                <div className='text-white text-center capitalize font-bold text-2xl'>It happens here!</div>
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
              {/* <div className='mb-8'> */}
              <div className='border-dashed h-20 border-purple-200 border-2 mt-6 '>
                <div  className='' {...getRootProps({className:'dropzone'})}>
                  <input name='file' className='hidden' type='file' {...getInputProps({onChange: function(e){setFieldValue('file', e.currentTarget.files[0]); setFileUp(true)}})} />
                  {/* <p className='text-center text-sm p-4 text-blue-300'>Drag and drop files or click to browse</p> */}
                  { fileUp? <ul  className='text-center text-sm p-8 text-blue-300 focus:outline-none'>{files}</ul>  : (<p className='text-center text-sm p-4 text-blue-300'>Drag and drop files or click to browse</p>)}
                  {errors.file && touched.file? <Err className='text sm'>{errors.file}</Err>: null}
                </div>
              </div>
                {/* <ul>{files}</ul> */}
              {/* </div> */}
              <div className='mt-12 justify-center flex h-10'>
                <button type='submit' className='w-full font-bold bg-purple-600 mx-8 rounded-full hover:bg-purple-800 focus:outline-none shadow-2xl text-white'>{loading ? 'Loading' : 'Parse AMF'}</button>
              </div>
              </div>
            </Form>            
          )}
        </Formik>
      </div>
    </div>
    </div>
    )
  }
}