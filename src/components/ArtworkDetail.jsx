// components/ArtworkDetail.js
import React, { useState, useEffect } from 'react';
import { fetchArtwork } from '../utils/utils'; // Create this function in utils.js

function ArtworkDetail({ id }) {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    // Fetch the artwork with the specified ID from Django backend
    fetchArtwork(id)
      .then((data) => setArtwork(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {artwork ? (
        <div>
          <h2>{artwork.title}</h2>
          <p>Artist: {artwork.artist.username}</p>
          <p>Description: {artwork.description}</p>
          <p>Price: ${artwork.price}</p>
          {/* Add more artwork details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ArtworkDetail;
