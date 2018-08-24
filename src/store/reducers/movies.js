import produce from "immer";

import { MOVIES_SET, MOVIES_ERROR } from "../types";

const defaultState = {
  collection: []
};

export default (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
      case MOVIES_ERROR:
        draft.error = action.payload;
        break;
      case MOVIES_SET:
        draft.collection = action.payload.results;
        break;
    }
    return draft;
  });
