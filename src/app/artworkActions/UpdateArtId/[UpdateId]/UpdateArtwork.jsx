// components/UpdateArtwork.js
import React, { useState, useEffect } from 'react';
import { fetchArtworks, updateArtwork } from '@/utils/utils'; // Create these functions in utils.js

function UpdateArtwork({ id }) {
  const [artwork, setArtwork] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    // Add more fields here
  });

  useEffect(() => {
    // Fetch the artwork details when the component mounts
    fetchArtworks(id)
      .then((data) => {
        setArtwork(data);
        setFormData(data); // Set the form data to the current artwork's details
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Send a PUT request to update the artwork
    updateArtwork(id, formData)
      .then((response) => {
        // Handle success, e.g., redirect to the artwork detail page
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      {artwork ? (
        <form onSubmit={handleUpdate}>
          <label>
            Title:
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </label>
          {/* Add more form fields here for description, price, etc. */}
          <button type="submit">Update Artwork</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UpdateArtwork;
