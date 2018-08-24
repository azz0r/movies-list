import React from "react";

import { H1, Wrapper } from "../../styles/";
import Movies from "../movies";

const Landing = ({ collection = [] }) => (
  <Wrapper>
    <header>
      <H1>Movie Listings</H1>
    </header>
    {collection ? (
      <section>
        <Movies collection={collection} />
      </section>
    ) : null}
  </Wrapper>
);

export default Landing;
