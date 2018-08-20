import { FETCH_MOVIES } from "./types";

const defaultState = {
  filters: [],
  sortBy: "popularity",
  collection: []
};

export default (state = defaultState, action) => {
  state = Object.assign(defaultState, state);

  switch (action.type) {
    case FETCH_MOVIES:
      state = action.payload;
      break;
  }

  return state;
};
