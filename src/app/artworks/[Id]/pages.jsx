// pages/artwork/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchArtwork } from '../../utils/utils';

const ArtworkDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    if (id) {
      fetchArtwork(id)
        .then((data) => setArtwork(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div>
      {artwork ? (
        <div>
          <h1>{artwork.title}</h1>
          <p>{artwork.description}</p>
          {/* Add more artwork details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArtworkDetailPage;
