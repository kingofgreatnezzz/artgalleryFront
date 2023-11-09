// components/DeleteArtwork.js
import React, { useState, useEffect } from 'react';
import { fetchArtwork, deleteArtwork } from '../utils/utils'; // Create these functions in utils.js
import { useRouter } from 'next/router';

function DeleteArtwork({ id }) {
  const router = useRouter();

  const handleDelete = () => {
    // Send a DELETE request to delete the artwork
    deleteArtwork(id)
      .then(() => {
        // Handle success, e.g., redirect to the artwork list page
        router.push('/artworks');
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <p>Are you sure you want to delete this artwork?</p>
      <button onClick={handleDelete}>Delete Artwork</button>
    </div>
  );
}

export default DeleteArtwork;
