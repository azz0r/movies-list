import React from "react";

import Movie from "./movie";

const Movies = ({ collection = [] }) => (
  <section>{collection.map(item => <Movie key={item.id} {...item} />)}</section>
);

export default Movies;
