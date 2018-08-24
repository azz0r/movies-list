import { compose } from "recompose";
import { connect } from "react-redux";

import Movies from "./movies";

const enhance = compose(
  connect(state => ({
    collection: state.movies.collection
  }))
);

export default enhance(Movies);
