import axios from 'axios';

const KEY = '264653736f70104ec02ac08f6fa6f8de';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: KEY,
};

export const getMovieTranding = async () => {
  const { data } = await axios.get('/trending/movie/week', {
    params: {
      page: 1,
    },
  });

  return data;
};

export const getQueryByMovie = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const getReviewsId = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data.results;
};
export const getCastId = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data.cast;
};
