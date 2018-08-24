import React from "react";

import { MoviesWrapper } from "./styled";
import Movie from "./movie";

const Movies = ({ collection = [] }) => (
  <MoviesWrapper>
    {collection.map(item => <Movie key={item.id} {...item} />)}
  </MoviesWrapper>
);

export default Movies;
