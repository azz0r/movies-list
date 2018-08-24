import { MOVIES_SET } from "./types";

const defaultState = {
  filters: [],
  sortBy: "popularity",
  collection: []
};

export default (state = defaultState, action) => {
  state = Object.assign(defaultState, state);

  switch (action.type) {
    default:
      break;
    case MOVIES_SET:
      state.collection = action.payload;
      break;
  }

  console.log(state);
  return state;
};
