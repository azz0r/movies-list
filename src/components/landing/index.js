import React, { Component } from "react";
import { compose, lifecycle } from "redux";
import { connect } from "react-redux";

import { requestMovies } from "../../store/actions";
import { H1, Wrapper } from "../../styles/";

import Landing from "./landing";

const enhance = compose(
  lifecycle({
    componentWillMount() {
      this.props.dispatch(requestMovies());
    }
  }),
  connect(state => ({
    collection: state.collection
  }))
);

export default enhance(Landing);
