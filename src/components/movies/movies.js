import React from "react";

import { MoviesWrapper, MovieItem } from "./styled";
import Movie from "./movie";

const Movies = ({ collection = [] }) => (
  <MoviesWrapper>
    {collection.map(item => (
      <MovieItem key={item.id}>
        <Movie {...item} />
      </MovieItem>
    ))}
  </MoviesWrapper>
);

export default Movies;
