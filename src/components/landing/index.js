import React, { Component } from "react";
import { compose } from "redux";
import { lifecycle } from "recompose";
import { connect } from "react-redux";

import { requestMovies } from "../../store/actions";
import { H1, Wrapper } from "../../styles/";

import Landing from "./landing";

const enhance = compose(
  connect(state => ({
    collection: state.collection
  })),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(requestMovies());
    }
  })
);

export default enhance(Landing);
