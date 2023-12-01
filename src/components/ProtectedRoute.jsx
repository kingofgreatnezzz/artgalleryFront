// components/ProtectedRoute.js
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect to login if the user is not authenticated
  if (!user) {
    router.push('/login');
    return null;
  }

  return
  <div> 
  {children}
  </div>
  
};

export default ProtectedRoute;
