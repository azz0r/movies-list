import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Landing from "./landing";
import Movies from "../movies";

const testProps = [
  {
    title: "model 1",
    overview: "overview 1",
    backdrop_path: "/1"
  }
];

describe("Given the Landing component", () => {
  let component;
  it("should render a single movie", () => {
    const wrapper = shallow(<Landing {...testProps} />);
    expect(wrapper.find(Movies)).to.have.length(1);
  });
});
