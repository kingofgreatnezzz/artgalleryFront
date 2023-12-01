import React, { useState } from 'react';

const ArtworkForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [artist, setArtist] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [image, setImage] = useState([]);
  const [created_at, setCreated_at] = useState([]);

  const handleSubmit = () => {
    // Prepare the data for the API request
    const artworkData = {
      title,
      categories,  // Array of selected category IDs
      artist,
      description,
      price,
      image,
      categories,
      created_at,
    };

    // Call the onSubmit function with the prepared data
    onSubmit(artworkData);
  };

  return (
    <form>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

      <label>Categories:</label>
      {/* Implement a way for users to select categories, e.g., checkboxes or a dropdown */}
      {/* For simplicity, assuming categories is an array of category IDs */}
      <input type="checkbox" value="1" onChange={(e) => handleCategoryChange(e.target.value)} /> Paintings
      <input type="checkbox" value="1" onChange={(e) => handleCategoryChange(e.target.value)} /> Graphics
      <input type="checkbox" value="1" onChange={(e) => handleCategoryChange(e.target.value)} /> Sculpture
      <input type="checkbox" value="1" onChange={(e) => handleCategoryChange(e.target.value)} /> Uli
      <input type="checkbox" value="1" onChange={(e) => handleCategoryChange(e.target.value)} /> Fashion
      {/* Repeat for other categories */}

      <label>Desription:</label>
      <input type="text" value={description} onChange={(e) => setTitle(e.target.value)}/>

      <label>Artist Name:</label>
      <input type="text" value={artist} onChange={(e) => setTitle(e.target.value)}/>

      <label>Price:</label>
      <input type="text" value={price} onChange={(e) => setTitle(e.target.value)}/>

      <label>Image:</label>
      <input type="text" value={image} onChange={(e) => setTitle(e.target.value)}/>

      <label>Date:</label>
      <input type="text" value={created_at} onChange={(e) => setTitle(e.target.value)}/>
      
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ArtworkForm;
