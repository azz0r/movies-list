import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import reducer from "./movies";
import * as types from "../types";

configure({ adapter: new Adapter() });

const defaultModels = [
  {
    title: "model 1",
    overview: "overview 1",
    backdrop_path: "/1"
  },
  {
    title: "model 2",
    overview: "overview 2",
    backdrop_path: "/2"
  },
  {
    title: "model 3",
    overview: "overview 3",
    backdrop_path: "/3"
  }
];

const action = {
  type: types.RESET,
  payload: []
};

describe("Given a Movies reducer", () => {
  let activeReducer;

  before(() => (activeReducer = reducer(undefined, action)));

  it("should return the initial state (no Movies)", () => {
    expect(activeReducer.collection).to.have.length(0);
  });

  describe(`When its given ${defaultModels.length} Movies`, () => {
    before(() => {
      const action = {
        type: types.MOVIES_SET,
        payload: { results: defaultModels }
      };
      activeReducer = reducer(activeReducer, action);
    });

    it(`should return ${defaultModels.length} Movies on the collection`, () => {
      expect(activeReducer.collection).to.have.length(defaultModels.length);
    });
  });
});
