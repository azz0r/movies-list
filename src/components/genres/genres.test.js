import React from "react";
import { shallow } from "enzyme";
import chai, { expect } from "chai";

import Genres from "./genres";

const testProps = [
  {
    id: "1",
    name: "horror"
  },
  {
    id: "2",
    name: "action"
  },
  {
    id: "3",
    name: "drama"
  }
];

describe("Given the Genres component", () => {
  let component;

  before(() => (component = shallow(<Genres collection={[testProps[0]]} />)));

  it("should render 1 Genre", () => {
    expect(component.find("li")).to.have.length(1);
  });

  describe("when its given 3 Genres", () => {
    before(() => (component = shallow(<Genres collection={testProps} />)));

    it("should render 3 Genres", () => {
      expect(component.find("li")).to.have.length(3);
    });
  });
});
