import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BookForm from "./components/BookForm";
import AuthorForm from "./components/AuthorForm";
import Books from "./components/Books";
import Authors from "./components/Authors";
import EditAuthor from "./components/EditAuthor";
import EditBook from "./components/EditBook";

const App = () => {
  const [authors, setAuthors] = useState([
    { id: 1, name: "Aravind", birthDate: "2010-01-14", biography: "Bio 1" },
    { id: 2, name: "Arjunan", birthDate: "2012-02-02", biography: "Bio 2" },
  ]);

  
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Kalki",
      author: "Manojkumar",
      isbn: "1234567890",
      publicationDate: "2005-01-01",
    },
    {
      id: 2,
      title: "Javascript",
      author: "Sunderesan",
      isbn: "0987654321",
      publicationDate: "2007-07-09",
    },
  ]);

  const handleAddBook = (book) => {
    const newBook = {
      id: books.length + 1,
      ...book,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };


  const handleAddAuthor = (author) => {
    const newAuthor = {
      id: authors.length + 1,
      ...author,
    };
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  const handleUpdateAuthor = (updatedAuthor) => {
    const updatedAuthors = authors.map((author) =>
      author.id === updatedAuthor.id ? updatedAuthor : author
    );
    setAuthors(updatedAuthors);
  };

  const handleDeleteAuthor = (authorId) => {
    const updatedAuthors = authors.filter((author) => author.id !== authorId);
    setAuthors(updatedAuthors);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/add-author"
              element={
                <AuthorForm initialValues={{}} onSubmit={handleAddAuthor} />
              }
            />
            <Route
              path="/view-authors"
              element={
                <Authors authors={authors} onDelete={handleDeleteAuthor} />
              }
            />
            <Route
              path="/add-book"
              element={<BookForm initialValues={{}}  onSubmit={handleAddBook} />}
            />

            <Route
              path="/edit-author/:id"
              element={
                <EditAuthor authors={authors} onUpdate={handleUpdateAuthor} />
              }
            />
            <Route
              path="/view-books"
              element={<Books books={books} onDelete={handleDeleteBook} />}
            />

            <Route
              path="/edit-book/:id"
              element={<EditBook books={books} onUpdate={handleUpdateBook} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
