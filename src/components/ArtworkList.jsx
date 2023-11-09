// components/ArtworkList.js
import React, { useState, useEffect } from 'react';
import { fetchArtworks } from '../utils/utils';

function ArtworkList() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch artworks from Django backend
    fetchArtworks()
      .then((data) => setArtworks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Artworks</h2>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist.username}</p>
            <p>Description: {artwork.description}</p>
            <p>Price: ${artwork.price}</p>
            {/* Add more artwork details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtworkList;
