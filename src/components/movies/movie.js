import React from "react";

import { MovieArticle } from "./styled";
import { H2, Paragraph } from "../../styles/";
import Genres from "../genres/index";

export const baseUrl = "https://image.tmdb.org/t/p/w500/";

const Movie = ({
  title = "",
  overview = "",
  genre_ids = [],
  backdrop_path = ""
}) => (
  <MovieArticle>
    <H2 tabIndex={0}>{title}</H2>
    <Paragraph tabIndex={0}>{overview}</Paragraph>
    <Genres ids={genre_ids} />
    <photo>
      <img alt={title} title={title} src={`${baseUrl}${backdrop_path}`} />
    </photo>
  </MovieArticle>
);

export default Movie;
