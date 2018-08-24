import { compose } from "redux";
import { mapProps } from "recompose";
import { connect } from "react-redux";

import Genres from "./genres";

const enhance = compose(
  connect(state => ({
    collection: state.genres.collection
  })),
  mapProps(({ collection, ids, ...rest }) => {
    return {
      collection: collection.filter(genre => ids.includes(genre.id))
    };
  })
);

export default enhance(Genres);
