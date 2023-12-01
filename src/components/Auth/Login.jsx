// components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login, error } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    await login(credentials);
    // Additional logic after login if needed
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
