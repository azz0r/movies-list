import React from "react";
import { shallow } from "enzyme";
import chai, { expect } from "chai";

import Movies from "./movies";
import Movie from "./movie";
import { MoviesWrapper, MovieItem } from "./styled";

const testProps = [
  {
    title: "model 1",
    overview: "overview 1",
    backdrop_path: "/1"
  }
];
const manyItems = [testProps, testProps, testProps];

describe("Given the Movies component", () => {
  let component;

  before(() => (component = shallow(<Movies collection={testProps} />)));

  it("should render 1 MoviesWrapper", () => {
    expect(component.find(MoviesWrapper)).to.have.length(1);
  });
  it("should render 1 MovieItem", () => {
    expect(component.find(MovieItem)).to.have.length(1);
  });
  it("should render 1 Movie", () => {
    expect(component.find(Movie)).to.have.length(1);
  });

  describe(`when its given ${manyItems.length} Movies`, () => {
    before(() => (component = shallow(<Movies collection={manyItems} />)));

    it("should render 1 MoviesWrapper", () => {
      expect(component.find(MoviesWrapper)).to.have.length(1);
    });
    it(`should render ${manyItems.length} Movies`, () => {
      expect(component.find(MovieItem)).to.have.length(manyItems.length);
      expect(component.find(Movie)).to.have.length(manyItems.length);
    });
  });
});
