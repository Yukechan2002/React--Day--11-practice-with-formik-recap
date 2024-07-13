import "../css/EditAuthor.css"; // Import the CSS file

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const EditAuthor = ({ authors, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const selectedAuthor = authors.find((a) => a.id === parseInt(id));
    setAuthor(selectedAuthor);
  }, [authors, id]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    birthDate: Yup.date()
      .max(new Date(), "Enter valid Date of Birth")
      .required("Birth Date is required"),
    biography: Yup.string().required("Biography is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onUpdate({ id: author.id, ...values });
    setSubmitting(false);
    navigate("/view-authors");
  };

  // Ensure author data is loaded before rendering the form
  if (!author) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="form-title">Edit Author</h2>
      <div className="form-container">
        <Formik
          initialValues={{
            name: author.name || "",
            birthDate: author.birthDate || "",
            biography: author.biography || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">
                  Birth Date
                </label>
                <Field
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="form-control"
                />
                <ErrorMessage
                  name="birthDate"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="biography" className="form-label">
                  Biography
                </label>
                <Field
                  as="textarea"
                  id="biography"
                  name="biography"
                  className="form-control"
                />
                <ErrorMessage
                  name="biography"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary me-2 btn-submit"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditAuthor;


