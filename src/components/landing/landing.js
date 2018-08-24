import React from "react";

import { H1, Wrapper } from "../../styles/";
import Movies from "../movies/index";

const Landing = ({ collection = [] }) => (
  <Wrapper>
    <header>
      <H1>Movie Listings</H1>
    </header>
    <Movies />
  </Wrapper>
);

export default Landing;
