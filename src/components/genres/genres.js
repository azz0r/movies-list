import React from "react";

import { GenresWrapper, GenreItem } from "./styled";

const Genres = ({ collection = [] }) => (
  <GenresWrapper>
    {collection.map(({ id, name }) => <GenreItem key={id}>{name}</GenreItem>)}
  </GenresWrapper>
);

export default Genres;
