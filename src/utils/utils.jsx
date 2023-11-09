// utils/utils.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/'; // Update with your Django backend URL

// Function to fetch a list of artworks
export async function fetchArtworks() {
  try {
    const response = await axios.get(`${API_BASE_URL}artworks/`);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching artworks:', error);
    throw error;
  }
}

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

// Function to fetch artwork details
export async function fetchArtwork(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}artworks/${id}/`);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching artwork details:', error);
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
