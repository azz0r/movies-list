import React from "react";
import { shallow } from "enzyme";
import chai, { expect } from "chai";

import Movies from "./movies";
import Movie from "./movie";

const testProps = [
  {
    title: "model 1",
    overview: "overview 1",
    backdrop_path: "/1"
  }
];
const manyMovies = [testProps, testProps, testProps];

describe("Given the Movies component", () => {
  let component;

  before(() => (component = shallow(<Movies collection={testProps} />)));

  it("should render 1 Movie", () =>
    expect(component.find(Movie)).to.have.length(1));

  describe("when its given 3 Movies", () => {
    before(() => (component = shallow(<Movies collection={manyMovies} />)));

    it("should render 3 Movies", () =>
      expect(component.find(Movie)).to.have.length(3));
  });
});
