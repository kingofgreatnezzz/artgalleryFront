// pages/artwork/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchArtworks, fetchComments } from "@/utils/utils";

const ArtworkDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artwork, setArtwork] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworkData = await fetchArtworks(id);
        setArtwork(artworkData);

        const commentsData = await fetchComments(id);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
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
      <div>
        {artwork && (
          <div>
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <p>Price {artwork.price}</p>
            <Image>{artwork.image}</Image>
            <p>{artwork.created_at}</p>
          </div>
        )}
        {/* Map for Comments */}
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.user}</p>
            <p>{comment.text}</p>
            <p>{comment.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkDetailPage;
