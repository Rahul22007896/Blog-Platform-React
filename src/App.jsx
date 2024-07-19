import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './components/Login';
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import EditorPage from './components/EditorPage';
import AuthorPage from './components/AuthorPage';
import BlogForm from './components/BlogForm'; // New component for adding/editing blogs

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editor"
            element={
              <ProtectedRoute roles={['editor', 'admin']}>
                <EditorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/author"
            element={
              <ProtectedRoute roles={['author', 'editor', 'admin']}>
                <AuthorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-blog"
            element={
              <ProtectedRoute roles={['author', 'editor', 'admin']}>
                <BlogForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-blogs"
            element={
              <ProtectedRoute roles={['editor', 'admin']}>
                <BlogForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
