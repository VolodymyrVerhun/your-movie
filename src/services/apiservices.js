import axios from 'axios';
import { API_KEY } from 'utils/constance';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  try {
    const {
      data: { results },
    } = await axios.get(`/trending/all/week?api_key=${API_KEY}`);

    return results;
  } catch (error) {
    return error.message;
  }
}

export async function getSearchMovies(query) {
  try {
    const {
      data: { results },
    } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return results;
  } catch (error) {
    return error.message;
  }
}

export async function getMovieDetails(id) {
  try {
    const results = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

    return results.data;
  } catch (error) {
    return error.message;
  }
}

export async function getMovieCast(id) {
  try {
    const results = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);

    return results.data.cast;
  } catch (error) {
    return error.message;
  }
}

export async function getMovieReviews(id) {
  try {
    const results = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);

    return results.data.results;
  } catch (error) {
    return error.message;
  }
}
