import React, { useState, useContext } from "react";
import "../output.css";
import { useDropzone } from "react-dropzone";
import { LeftPanel } from "./LeftPanel";
import { Field, Form, Formik } from "formik";
import { Navbar } from "./layouts/Navbar";
import { AuthContext } from "../App";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import download from "downloadjs";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const Err = styled.div({
  color: "red"
});

const UploadSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Name cannot be less than 3 characters")
    .max(40, "Too Long! Name cannot be longer than 40 characters")
    .required("Required Name is required"),
  file: Yup.string().required("Required, a file needs to be attached!"),
  email: Yup.string()
    .email("This is not a valid email")
    .required("Email is a required field")
});

export function Parse() {
  const { state } = useContext(AuthContext);
  console.log(state);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [loading, setLoading] = useState(false);
  // const [flash,  setFlash] = useState (false);
  const [fileUp, setFileUp] = useState(false);
  const [err, setErr] = useState(null);
  let [submitted, setSubmit] = useState(false);
  const [response, setResponse] = useState(false);
  const files = acceptedFiles.map(file => (
    <li key={file.path} className="text-xs focus:outline-none">
      {file.path} - {file.size / 1000} kb
    </li>
  ));

  const handleSubmit = values => {
    // console.log(values);
    setLoading(true);
    const { name, email, file } = values;
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("file", file);
    axios
      .post("http://localhost:5003/api/v1/amf/parse", data, {
        headers: { Accept: "multipart/form-data" }
      })
      .then(response => {
        console.log(response);
        setSubmit(true);
        setResponse(response.data.downloadPath);
      })
      .catch(err => {
        setErr(err);
        setLoading(false);
        setTimeout(() => setErr(false), 5000);
      });
  };

  const Loader = () => (
    <span>
      Loading... <i className="fas fa-spinner fa-spin"></i>{" "}
    </span>
  );

  const ErrFlash = () => (
    <div
      className="bg-red-100 mb-0 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold ">{err.message} </strong>
      <span className="block sm:inline text-sm"> There was an issue.</span>
      <span
        onClick={() => setErr(false)}
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );

  const downloadFile = async event => {
    try {
      const filename = event.target.innerText;
      const res = await fetch(`http://localhost:5003/files/${filename}`);
      const blob = await res.blob();
      download(blob, filename);
    } catch (err) {
      setErr(err);
    }
  };

  if (submitted) {
    return (
      <div className="App h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full flex flex-wrap">
          <div className="bg-gray-300 w-1/2 ">
            <LeftPanel />
          </div>
          <div className="w-1/2 bg-gray-100 justify-center">
            <div className="bg-white mx-auto w-1/2 mt-20 shadow-lg rounded-b-lg">
              <div className="bg-orange-500  p-5">
                <div className="text-white text-center capitalize font-bold text-2xl">
                  Voila! Parsing Done...
                </div>
              </div>
              <div className="mx-10 py-24 rounded-b-full">
                <div
                  onClick={downloadFile}
                  className="border-dashed  border-2 items-center justify-center border-orange-300 py-8 px-3"
                >
                  <div className="items-center flex justify-center text-orange-500">
                    <CloudDownloadIcon
                      className="mx-auto "
                      color="inherit"
                      fontSize="large"
                    />
                  </div>
                  <p className="text-center text-xs text-purple-600">
                    {response}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App  h-screen">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-2/5">
            <LeftPanel />
          </div>
          <div className="w-3/5  bg-gray-100">
            <div className="justify-center">
              <div className="mt-20 mb-4">{err ? <ErrFlash /> : null}</div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  file: {}
                }}
                validationSchema={UploadSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, setFieldValue }) => (
                  <Form className="rounded-b-full shadow-lg bg-white pb-8 mx-auto mt-0 mb-24 max-md w-2/5">
                    <div className="bg-orange-500  p-5">
                      <div className="text-white md:text-xl text-center capitalize font-bold">
                        The Magic Happens here!
                      </div>
                    </div>
                    <div className="px-12 md:px-6 py-2 my-6">
                      <div className="mb-4">
                        <label className="text-xs" htmlFor="name">
                          Name
                        </label>
                        <Field
                          name="name"
                          className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-xs py-1 px-4 block w-full appearance-none leading-normal mb-2"
                          placeholder="e.g.  John Jude"
                        // value={state.user.firstName}
                        />
                        {errors.name && touched.name ? (
                          <Err className="text-sm">{errors.name}</Err>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <label className="text-xs" htmlFor="email">
                          Email
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-xs py-1 px-4 block w-full appearance-none leading-normal mb-2"
                          placeholder="e.g. johnjude@gtbank.com"
                        // value={state.user.email}
                        />
                        {errors.email && touched.email ? (
                          <Err className="text-sm">{errors.email}</Err>
                        ) : null}
                      </div>
                      <div className="border-dashed focus:outline-none h-20 border-orange-300 border-2 mt-6 ">
                        <div
                          className="focus:outline-none"
                          {...getRootProps({ className: "dropzone" })}
                        >
                          <input
                            name="file"
                            className="hidden focus:outline-none"
                            type="file"
                            {...getInputProps({
                              onChange: function (e) {
                                setFieldValue("file", e.currentTarget.files[0]);
                                setFileUp(true);
                              }
                            })}
                          />
                          {fileUp ? (
                            <ul className="text-center text-sm p-8 text-blue-300 ">
                              {files}
                            </ul>
                          ) : (
                              <p className="text-center focus:outline-none md:text-xs text-sm p-4 text-blue-300">
                                Drag and drop files or click to browse
                            </p>
                            )}
                          {errors.file && touched.file ? (
                            <Err className="text sm">{errors.file}</Err>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-12 justify-center flex h-10">
                        <button
                          type="submit"
                          className="w-full md:text-xs font-bold bg-orange-500 mx-8 rounded-full hover:bg-orange-300 focus:outline-none shadow-2xl text-white"
                        >
                          {loading ? <Loader /> : "Parse AMF"}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
