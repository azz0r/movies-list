import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import reducer from "./genres.reducer";
import * as types from "./types";

configure({ adapter: new Adapter() });

const defaultModels = [
  {
    id: "1",
    name: "drama"
  },
  {
    id: "2",
    name: "action"
  },
  {
    id: "3",
    name: "horror"
  }
];

const action = {
  type: types.RESET,
  payload: []
};

describe("given a Genres reducer", () => {
  let activeReducer;

  before(() => (activeReducer = reducer(undefined, action)));

  it("should return the initial state (no Genres)", () => {
    expect(activeReducer.collection).to.have.length(0);
  });

  describe("when its given 3 Genres", () => {
    before(() => {
      const action = {
        type: types.GENRES_SET,
        payload: { genres: defaultModels }
      };
      activeReducer = reducer(activeReducer, action);
    });

    it("should return 3 Genres on the collection", () => {
      expect(activeReducer.collection).to.have.length(3);
    });
  });
});
