import produce from "immer";

import { MOVIES_SET } from "./types";

const defaultState = {
  filters: [],
  sortBy: "popularity",
  collection: []
};

export default (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
      case MOVIES_SET:
        draft.collection = action.payload;
        break;
    }
    return draft;
  });
