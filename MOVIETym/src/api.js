import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, page, language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return { results: [] };
  }
};

export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: { api_key: API_KEY, page, language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return { results: [] };
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query, language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    return { results: [] };
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY, append_to_response: 'credits' },
    });
    console.log('Fetched movie details:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};