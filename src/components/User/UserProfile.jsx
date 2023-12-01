// components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    // Add other profile fields here
  });

  useEffect(() => {
    // Fetch additional user profile data from your Django backend
    // Update the state with the fetched data
    // Example: Fetch additional data from '/api/profile' endpoint
    // const fetchData = async () => {
    //   const response = await fetch('/api/profile');
    //   const data = await response.json();
    //   setProfileData(data);
    // };
    // fetchData();
  }, [user]);

  const handleUpdateProfile = async () => {
    // Implement the logic to send updated profile data to your Django backend
    // Example: Update data with a PUT request to '/api/profile'
    // await fetch('/api/profile', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(profileData),
    // });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <label>
        Username:
        <input
          type="text"
          value={profileData.username}
          onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={profileData.email}
          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
        />
      </label>
      {/* Add other profile fields here */}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
