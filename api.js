import axios from 'axios';

const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1
      }
    });
    
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

export async function searchMovies(query) {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: query,
        page: 1,
        include_adult: false
      }
    });
    
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error getting movie details:', error);
    throw error;
  }
}