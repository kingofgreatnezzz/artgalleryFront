// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Art Gallery</h1>
      <Link href="/artworks">
        <a>View Artworks</a>
      </Link>
    </div>
  );
};

export default HomePage;
