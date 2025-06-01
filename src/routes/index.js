import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Navbar from "./Navbar";
import Protected from "./Protected";

const Browse = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Blogs />
            </Protected>
          }
        />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route
          path="/contact"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Contact />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Browse;
