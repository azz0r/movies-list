import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { requestMovies } from "../../store/actions";
import { H1, Wrapper } from "../../styles/";

import Movies from "../../components/movies";

class Landing extends Component {
  componentWillMount() {
    this.props.dispatch(requestMovies());
  }
  render() {
    return (
      <Wrapper>
        <header>
          <H1>Movie Listings</H1>
        </header>
        <section>
          <Movies collection={this.props.collection} />
        </section>
      </Wrapper>
    );
  }
}

const enhance = compose(
  connect(state => ({
    collection: state.collection
  }))
);

export default enhance(Landing);
