// components/SignUp.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const { register, error } = useAuth();
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleSignUp = async () => {
    await register(userData);
    // Additional logic after registration if needed
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
