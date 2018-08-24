import produce from "immer";

import { GENRES_SET, GENRES_ERROR } from "./types";

const defaultState = {
  collection: []
};

export default (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
      case GENRES_ERROR:
        draft.error = action.payload;
        break;
      case GENRES_SET:
        draft.collection = action.payload.genres;
        break;
    }
    return draft;
  });
