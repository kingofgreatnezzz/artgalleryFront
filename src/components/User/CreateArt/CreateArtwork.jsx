// components/CreateArtwork.js
import React, { useState } from 'react';
import { createArtwork } from '../utils/utils'; // Create this function in utils.js


function CreateArtwork() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    // Add more fields here
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to create the artwork
    createArtwork(formData)
      .then((response) => {
        // Handle success, e.g., redirect to the artwork detail page
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      {/* Add more form fields here for description, price, etc. */}
      <button type="submit">Create Artwork</button>
    </form>
  );
}

export default CreateArtwork;
