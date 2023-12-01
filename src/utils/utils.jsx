// utils/utils.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/artgallery/api/artworks/';

export async function fetchArtworks(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}${id}/`);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching artwork details:', error);
    throw error;
  }
}



export default async function fetchComments() {
  try{
    const response = await fetch(`/api/comments/?artwork=${artworkId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments', error);
    throw error;
  }
  };


// Function to create a new artwork
export async function createArtwork(formData, token) {
  try {
    const response = await axios.post(`${API_BASE_URL}artworks/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error creating artwork:', error);
    throw error;
  }
}



// Function to update an artwork
export async function updateArtwork(id, formData, token) {
  try {
    const response = await axios.put(`${API_BASE_URL}artworks/${id}/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error updating artwork:', error);
    throw error;
  }
}

// Function to delete an artwork
export async function deleteArtwork(id, token) {
  try {
    const response = await axios.delete(`${API_BASE_URL}artworks/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error deleting artwork:', error);
    throw error;
  }
}

// Other utility functions for API calls


// utils.js

export const createOrUpdateArtwork = async (artworkData) => {
  try {
    const response = await fetch('your-api-endpoint/artworks/', {
      method: 'POST',  // Use 'PUT' for updates
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${YOUR_JWT_TOKEN}`,  // Include your JWT token
      },
      body: JSON.stringify(artworkData),
    });

    if (!response.ok) {
      throw new Error('Failed to create or update artwork');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating or updating artwork:', error);
    throw error;
  }
};

// utils.js

export const fetchNotifications = async () => {
  try {
    const response = await fetch('your-api-endpoint/notifications/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${YOUR_JWT_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch notifications');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};
