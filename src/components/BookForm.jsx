import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../css/BookForm.css"; // Import your custom CSS file

const BookForm = ({ initialValues, onSubmit }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    isbn: Yup.string()
      .required("ISBN is required")
      .matches(/^\d{10}$/, "ISBN must be exactly 10 digits"),
    publicationDate: Yup.date()
      .max(new Date(), "Enter valid publication date")
      .required("Birth Date is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    await onSubmit(values);
    setShowSuccess(true);
    resetForm();
    setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
    // Navigate to view books after successful submission
    navigate("/view-books");
  };

  return (
    <div className="form-container mt-5 mb-5">
      <h2 className="form-title">Add Book</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-field">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage
              name="title"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <Field name="author" type="text" className="form-control" />
            <ErrorMessage
              name="author"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="isbn" className="form-label">
              ISBN
            </label>
            <Field name="isbn" type="text" className="form-control" />
            <ErrorMessage
              name="isbn"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="publicationDate" className="form-label">
              Publication Date
            </label>
            <Field
              name="publicationDate"
              type="date"
              className="form-control"
            />
            <ErrorMessage
              name="publicationDate"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {showSuccess && (
            <div className="alert alert-success mt-3" role="alert">
              Book successfully added!
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
