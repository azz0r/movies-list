import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { requestMovies } from "../../store/actions";
import { H1, Wrapper } from "../../styles/";

import Movies from "../movies";

const Landing = ({ collection = [] }) => (
  <Wrapper>
    <header>
      <H1>Movie Listings</H1>
    </header>
    <section>
      <Movies collection={collection} />
    </section>
  </Wrapper>
);

export default Landing;
