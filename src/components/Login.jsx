/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
 const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', form);
    // Add login logic here (API call, validation, etc.)
  };
const navigate = useNavigate();
 const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validate = () => {
    const err = {};
    if (!form.email.includes('@')) err.email = 'Enter a valid email';
    if (form.password.length < 5) err.password = 'Password must be at least 5 characters';
    return err;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccess('');

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch('http://localhost:4001/api/Userauth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.authtoken) {
        localStorage.setItem('token', data.authtoken); // ✅ Save token

        props.showAlert('Logged in successfully', 'success');
        setForm({ email: '', password: '' });

        // ✅ Navigate after small delay to ensure token is stored
        setTimeout(() => {
          navigate('/');
        }, 100);
      } else {
        setErrors({ server: data.error || 'Login failed' });
        props.showAlert('Login failed', 'danger');
      }
    } catch (error) {
      setErrors({ server: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md" 
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!form.email.includes('@')) err.email = 'Enter a valid email';
    if (form.password.length < 5) err.password = 'Password must be at least 5 characters';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccess('');

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch('https://book-ke78.onrender.com/api/Userauth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.authtoken) {
        localStorage.setItem('token', data.authtoken);
        setForm({ email: '', password: '' });
        setSuccess('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 100);
      } else {
        setErrors({ server: data.error || 'Login failed' });
      }
    } catch (error) {
      setErrors({ server: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        {errors.server && (
          <p className="text-red-500 text-sm mb-4 text-center">{errors.server}</p>
        )}

        {success && (
          <p className="text-green-500 text-sm mb-4 text-center">{success}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
