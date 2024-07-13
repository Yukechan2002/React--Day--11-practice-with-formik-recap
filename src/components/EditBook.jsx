import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import "../css/EditBook.css"; // Import the custom CSS file

const EditBook = ({ books, onUpdate }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = books.find((b) => b.id === parseInt(id));
    setBook(selectedBook);
  }, [books, id]);

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

  const handleSubmit = async (values, { setSubmitting }) => {
    await onUpdate({ id: book.id, ...values });
    setSubmitting(false);
    navigate("/view-books"); // Navigate back to books page after update
  };

  // Ensure book data is loaded before rendering the form
  if (!book) return <div>Loading...</div>;

  return (
    <div className="edit-book-container mt-3 mb-5">
      {" "}
      {/* Use custom class name */}
      <h2>Edit Book</h2>
      <Formik
        initialValues={{
          title: book.title || "",
          author: book.author || "",
          isbn: book.isbn || "",
          publicationDate: book.publicationDate || "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="form-control"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <Field
                type="text"
                id="author"
                name="author"
                className="form-control"
              />
              <ErrorMessage
                name="author"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="isbn" className="form-label">
                ISBN
              </label>
              <Field
                type="text"
                id="isbn"
                name="isbn"
                className="form-control"
              />
              <ErrorMessage
                name="isbn"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="publicationDate" className="form-label">
                Publication Date
              </label>
              <Field
                type="date"
                id="publicationDate"
                name="publicationDate"
                className="form-control"
              />
              <ErrorMessage
                name="publicationDate"
                component="div"
                className="text-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditBook;
