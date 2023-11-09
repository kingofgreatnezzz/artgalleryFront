// pages/artworks/update/[artworkId].js
import React from 'react';
import UpdateArtwork from '../../../components/UpdateArtwork'; // Update with your component location

const UpdateArtworkPage = () => {
  return (
    <div>
      <h1>Update Artwork</h1>
      {/* Add your update artwork component */}
      <UpdateArtwork />
    </div>
  );
};

export default UpdateArtworkPage;


// pages/artworks/delete/[artworkId].js
import React from 'react';
import DeleteArtwork from '../../../components/DeleteArtwork'; // Update with your component location

const DeleteArtworkPage = () => {
  return (
    <div>
      <h1>Delete Artwork</h1>
      {/* Add your delete artwork component */}
      <DeleteArtwork />
    </div>
  );
};

export default DeleteArtworkPage;



 
// pages/artists/create.js
import React, { useState } from 'react';
import CreateArtist from '../../../components/CreateArtist'; // Update with
const CreateArtistPage = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/artists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, bio })
      });
    Router.push('/artists');
  };
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={e=>setName(e.target.value
            )}/>
        <br></br>
        <label htmlFor="bio">Biography</label>
        <textarea id="bio" rows="4" cols="50" value={bio} onChange={e=>setBio(e
            .target.value)}/>
        <button type="submit">Add Artist</button>
    </form>
    </div>
);
};

