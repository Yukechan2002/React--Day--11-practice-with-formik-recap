import React from "react";
import { Link } from "react-router-dom";
import "../css/Books.css"; // Import your custom CSS file

const Books = ({ books, onDelete }) => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="books-heading">Books</h2>
        <Link to="/add-book" className="btn btn-primary">
          Add Book
        </Link>
      </div>
      <table className="table table-striped table-3d">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Publication Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
              <td>
                <Link
                  to={`/edit-book/${book.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
