// pages/artworks.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ArtworksPage = () => {
  const [artworks, setArtworks] = useState([]);

  // Use useEffect to fetch artworks from your API
  useEffect(() => {
    // Fetch artworks and set the state
    // Example: fetchArtworks().then((data) => setArtworks(data));
  }, []);

  return (
    <div>
      <h1>Artworks</h1>
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <Link href={`/artwork/${artwork.id}`}>
            <a>
              <p>{artwork.title}</p>
            </a>
          </Link>
          {/* Add more artwork details or link to artwork details page */}
        </div>
      ))}
    </div>
  );
};

export default ArtworksPage;
