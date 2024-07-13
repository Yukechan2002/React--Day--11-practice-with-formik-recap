import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../css/AuthorForm.css";

const AuthorForm = ({ initialValues, onSubmit }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    birthDate: Yup.date()
      .max(new Date(), "Enter valid Date of Birth")
      .required("Birth Date is required"),
    biography: Yup.string().required("Biography is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await onSubmit(values); // Call the onSubmit function passed from parent component
      resetForm(); // Reset the form fields
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
      navigate("/view-authors"); // Navigate to view authors page
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container mt-5">
      <h2 className="form-title">Add Author</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="birthDate" className="form-label">
              Birth Date
            </label>
            <Field name="birthDate" type="date" className="form-control" />
            <ErrorMessage
              name="birthDate"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="biography" className="form-label">
              Biography
            </label>
            <Field name="biography" as="textarea" className="form-control" />
            <ErrorMessage
              name="biography"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthorForm;
