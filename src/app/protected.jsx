// pages/protected.js
import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

const ProtectedPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Protected Page</h1>
        {/* Add content for the protected page */}
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
