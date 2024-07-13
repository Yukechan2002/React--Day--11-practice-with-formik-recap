import React from "react";
import { Link } from "react-router-dom";
import "../css/Authors.css"; // Import your custom CSS file

const Authors = ({ authors, onDelete }) => {
  const handleDelete = (authorId) => {
    onDelete(authorId); // Call the onDelete function with authorId
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="authors-heading">Authors</h2>
        <Link to="/add-author" className="btn btn-primary">
          Add Author
        </Link>
      </div>
      <table className="table table-striped table-3d">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.birthDate}</td>
              <td>{author.biography}</td>
              <td>
                <Link
                  to={`/edit-author/${author.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(author.id)} // Call handleDelete with author.id
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

export default Authors;
