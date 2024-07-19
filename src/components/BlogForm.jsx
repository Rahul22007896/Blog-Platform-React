import { useState } from 'react';
import Navbar from './Navbar';
import './BlogForm.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Blog titled "${title}" has been submitted!`);
  };

  return (
    <div>
      <Navbar />
      <div className="blog-form-container">
        <form onSubmit={handleSubmit} className="blog-form">
          <h2>Add/Edit Blog</h2>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
