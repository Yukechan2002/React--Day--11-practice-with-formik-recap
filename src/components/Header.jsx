import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"; // Import your custom CSS file

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">
            Library Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-author">
                  Add Author
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-book">
                  Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-authors">
                  View Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-books">
                  View Books
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
