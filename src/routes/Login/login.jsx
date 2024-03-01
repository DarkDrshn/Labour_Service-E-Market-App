import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    window.alert('An email has been sent to reset your password.');
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all the fields.');
    } else {
      setError(null);
      // Simulate successful sign-in
      window.alert('Successfully signed in!');
      navigate('/market');
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="input-field"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="input-field"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex items-center justify-between">
          <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transform transition-transform hover:scale-105"
  type="button"
  onClick={handleSignIn}
>
  Sign In
</button>
            <a
              className="text-indigo-600 text-sm hover:text-indigo-800"
              href="/"
              onClick={handleForgotPasswordClick}
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
