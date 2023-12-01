// components/PasswordRecovery.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const PasswordRecovery = () => {
  const { recoverPassword, error } = useAuth();
  const [email, setEmail] = useState('');

  const handleRecoverPassword = async () => {
    await recoverPassword(email);
    // Additional logic after initiating password recovery if needed
  };

  return (
    <div>
      <h2>Password Recovery</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRecoverPassword}>Recover Password</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PasswordRecovery;
