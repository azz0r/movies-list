import React from "react";
import { shallow } from "enzyme";
import chai, { expect } from "chai";

import Genres from "./genres";
import { GenresWrapper, GenreItem } from "./styled";
const testProps = {
  id: "1",
  name: "horror"
};

const manyItems = [testProps, testProps, testProps];

describe("Given the Genres component", () => {
  let component;

  before(() => (component = shallow(<Genres collection={[testProps]} />)));

  it("should render 1 GenresWrapper", () => {
    expect(component.find(GenresWrapper)).to.have.length(1);
  });

  it("should render 1 Genre", () => {
    expect(component.find(GenreItem)).to.have.length(1);
  });

  describe(`when its given ${manyItems.length} Genres`, () => {
    before(() => (component = shallow(<Genres collection={manyItems} />)));

    it(`should render ${manyItems.length} GenreItems`, () => {
      expect(component.find(GenreItem)).to.have.length(manyItems.length);
    });
  });
});
