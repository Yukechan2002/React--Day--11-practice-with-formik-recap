// src/components/Home.jsx

import React from "react";

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to the Library Management System</h1>
      <h4>Manage your library's books and authors with ease.</h4>
      <p className="mt-3">
        A library management system helps organize, catalog, and manage books,
        ensuring efficient access and retrieval for library users.
      </p>
      <img
        className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
        src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png"
        alt="Library Management System"
      />
    </div>
  );
};

export default Home;
