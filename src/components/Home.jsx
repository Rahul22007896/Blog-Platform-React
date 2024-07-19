import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to Blog Platform</h1>
        <div className="options-container">
          <Link to="/add-blog" className="option-box">
            <h2>Add Blog</h2>
            <p>Add a new blog post</p>
          </Link>
          <Link to="/edit-blog" className="option-box">
            <h2>Edit Blog</h2>
            <p>Edit existing blog posts</p>
          </Link>
          <Link to="/delete-blog" className="option-box">
            <h2>Delete Blog</h2>
            <p>Delete existing blog posts</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
