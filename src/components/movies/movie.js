import React from "react";

import { H2, Paragraph } from "../../styles/";

const Movie = ({ title = "", overview = "", backdrop_path = "" }) => (
  <article>
    <H2 tabIndex={0}>{title}</H2>
    <Paragraph tabIndex={0}>{overview}</Paragraph>
    <photo>
      <img
        alt={title}
        title={title}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
      />
    </photo>
  </article>
);

export default Movie;
