import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values: FormData) => {
    Swal.fire({
      title: "Pesan anda sudah terkirim",
      html: `
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Message:</strong> ${values.message}</p>
      `,
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormValues(values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Me</h1>
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-2">
                Nama
              </label>
              <Field
                id="name"
                name="name"
                className="border border-gray-300 rounded p-2 w-full"
                placeholder="Masukan nama anda"
              />
              <ErrorMessage
                name="name"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="border border-gray-300 rounded p-2 w-full"
                placeholder="Masukan email anda"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold mb-2">
                Pesan :
              </label>
              <Field
                id="message"
                name="message"
                as="textarea"
                className="border border-gray-300 rounded p-2 w-full"
                placeholder="Masukan pesan anda"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Kirim
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
