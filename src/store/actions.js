import axios from "axios";

import { MOVIES_SET, MOVIES_ERROR } from "./types";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ffb22626b2cbb0778227b8fedc708642";

export const moviesRequestSucceeded = ({ results: payload }) => ({
  type: MOVIES_SET,
  payload
});

export const moviesRequestFailed = err => ({
  type: MOVIES_ERROR,
  err
});

export const requestMovies = () => {
  const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}`;
  return dispatch => {
    axios
      .get(url)
      .then(res => dispatch(moviesRequestSucceeded(res.data)))
      .catch(err => dispatch(moviesRequestFailed(err)));
  };
};
