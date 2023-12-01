// components/ArtworkList.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Artwork = ({ artwork, addToCart }) => (
  <div>
    <Link href={`/artworks/${artwork.id}`}>
      <a>
        <h1>{artwork.artist}</h1>
        <h2>{artwork.title}</h2>
        <p>Price {artwork.price}</p>
        <Image src={artwork.image} alt={artwork.title} width={300} height={200} />
        <p>{artwork.created_at}</p>
        <p>{artwork.comments}</p>
      </a>
    </Link>
    <button onClick={() => addToCart(artwork)}>Add to Cart</button>
  </div>
);

const ArtworkList = ({ searchQuery, addToCart }) => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch artworks from the API based on the search query
    const fetchArtworks = async () => {
      try {
        const response = await fetch(`/api/artworks/?search=${searchQuery}`);
        if (!response.ok) {
          throw new Error('Failed to fetch artworks');
        }
        const data = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtworks();
  }, [searchQuery]);

  return (
    <div>
      <h1>Artworks</h1>
      {/* Display artworks based on the fetched data */}
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <Artwork artwork={artwork} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default ArtworkList;
