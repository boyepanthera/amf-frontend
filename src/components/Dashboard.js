import React, { useState, useEffect } from "react";
import { Navbar } from "./layouts/Navbar";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Dashboard = () => {

  let [ledgers, setLedgers] = useState([]);
  let [err, setErr] = useState(null);
  let [success, setSuccess] = useState(null);
  let DashSchema = Yup.object().shape({
    oldCode: Yup.string()
      .length(4, "Old code has to be exactly four characters!")
      .required("Old ledger code cannot be empty"),
    glName: Yup.string()
      .min(2, "Too short, Group ledger name has minimum of 2 characters!")
      .required("Group ledger code cannot be empty"),
    finalCode: Yup.string()
      .length(4, "New  ledger code has to be exactly 4 characters!")
      .required("New ledger code cannot be empty"),
    side: Yup.string()
      .length(2, "Not allowed, side has to be two characters Dr/Cr!")
      .required("Side cannot be empty")
  });

  useEffect(() => {
    axios
      .get("http://localhost:5003/api/v1/change", {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        setLedgers(response.data.ledgers);
      })
      .catch(err => {
        // console.log(err);
        setErr(err.message);
      });
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // console.log(values);
      let res = await axios.post(
        "http://localhost:5003/api/v1/change",
        values,
        { headers: { Accept: "application/json" } }
      );
      // console.log(res);
      setLedgers(res.data.ledgers);
      resetForm();
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  };

  // const deleteFilter = id => {
  //   setLedgers(ledgers.filter(ledger => ledger._id !== id))
  // }

  const handleDelete = async event => {
    try {
      event.persist();
      let res = await axios.delete(`http://localhost:5003/api/v1/change/${event.target.id}`, { headers: { Accept: "application/json" } });
      setSuccess(res.data.message);
      setLedgers(ledgers.filter(ledger =>
        ledger._id !== parseInt(event.target.id)));
    } catch (err) {
      if (err.response) {
        setErr(err.response.data.message)
        setTimeout(() => setErr(null), 5000)
      } else {
        setErr('Unable to connect to server for deleting!')
        setTimeout(() => setErr(null), 5000)
      }
    }
  }

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="w-4/5 mx-auto">
        {err ? (
          <div className="text-red-500 text-center border border-red-200 bg-red-100 mt-6 p-2">
            {err}
          </div>
        ) : null}
        {success ? (
          <div className="text-blue-500 text-center border border-blue-200 bg-blue-100 mt-6 p-2">
            {success}
          </div>
        ) : null}
        <div className="flex flex-col bg-white mt-12 shadow-lg">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full my-8">
                <caption className="text-center font-bold text-2xl mb-6">
                  Ledger Changes
                </caption>
                <thead className="my-8">
                  <tr>
                    <th className="uppercase tracking-wider px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-gray-700 text-sm font-bold mb-2"></th>
                    <th className="uppercase tracking-wider px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-gray-700 text-sm font-bold mb-2">
                      Old GL Code
                    </th>
                    <th className="uppercase tracking-wider px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-gray-700 text-sm font-bold mb-2">
                      GL Name
                    </th>
                    <th className="uppercase tracking-wider px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-gray-700 text-sm font-bold mb-2">
                      New GL Code
                    </th>
                    <th className="uppercase tracking-wider px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-gray-700 text-sm font-bold mb-2">
                      Side
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {ledgers.map((ledger, i) => (
                    <tr key={i.toString()}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right tracking-wider">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left text-sm tracking-wider">
                        {ledger.old}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left text-sm tracking-wider">
                        {ledger.name}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left text-sm tracking-wider">
                        {ledger.new}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left text-sm tracking-wider">
                        {ledger.side}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left text-sm tracking-wider">
                        <button onClick={handleDelete} id={ledger._id} className='rounded focus:outline-none rounded-md bg-red-600 text-xs text-white px-2 py-1'>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Formik
          initialValues={{
            oldCode: "",
            glName: "",
            finalCode: "",
            side: ""
          }}
          onSubmit={handleSubmit}
          validationSchema={DashSchema}
        >
          {({ errors, touched }) => (
            <Form className="bg-white w-full px-12 rounded-lg shadow-xl py-6 mx-auto mt-8 mb-32">
              <div className="text-center font-bold text-2xl mb-8">Add New</div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/5 px-2 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Old GL Code
                  </label>
                  <Field
                    name="oldCode"
                    type="text"
                    placeholder="e.g. 4690"
                    className="h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  {errors.oldCode && touched.oldCode ? (
                    <div className="text-red-300">{errors.oldCode}</div>
                  ) : null}
                </div>
                <div className="w-full md:w-2/5 px-2 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    GL Name
                  </label>
                  <Field
                    type="text"
                    name="glName"
                    placeholder="e.g. IMTOs"
                    className="h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  {errors.glName && touched.glName ? (
                    <div className="text-red-300">{errors.glName}</div>
                  ) : null}
                </div>
                <div className="w-full md:w-1/5 px-2 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Final GL to use
                  </label>
                  <Field
                    type="text"
                    name="finalCode"
                    placeholder="e.g. 0600"
                    className="h-10 w-full rounded border leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  />
                  {errors.finalCode && touched.finalCode ? (
                    <div className="text-red-300">{errors.finalCode}</div>
                  ) : null}
                </div>
                <div className="w-full md:w-1/5 px-2 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Side
                  </label>
                  <div className="block mt-2">
                    <span className="mr-4">
                      <label className="mr-2">Dr</label>
                      <Field type="radio" name="side" value="Dr" />
                    </span>
                    <span>
                      <label className="mr-2">Cr</label>
                      <Field type="radio" name="side" value="Cr" />
                    </span>
                  </div>
                  {errors.side && touched.side ? (
                    <div className="text-red-300">{errors.side}</div>
                  ) : null}
                </div>
                <div className="flex ml-auto mr-2 my-8">
                  <button
                    type="submit"
                    className="bg-orange-500 rounded-md px-4 py-2 text-white"
                  >
                    Add Change
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
