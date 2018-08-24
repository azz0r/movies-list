import axios from "axios";

import * as Types from "./types";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ffb22626b2cbb0778227b8fedc708642";

export const requestSuccess = (payload, type) => ({
  type: Types[type],
  payload
});

export const requestError = (err, type) => ({
  type: Types[type],
  err
});

export const requestGenres = () => {
  const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}`;
  return dispatch => {
    axios
      .get(url)
      .then(res => dispatch(requestSuccess(res.data, Types.GENRES_SET)))
      .catch(err => dispatch(requestError(err, Types.GENRES_ERROR)));
  };
};

export const requestMovies = () => {
  const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}`;
  return dispatch => {
    axios
      .get(url)
      .then(res => dispatch(requestSuccess(res.data, Types.MOVIES_SET)))
      .catch(err => dispatch(requestError(err, Types.MOVIES_ERROR)));
  };
};
