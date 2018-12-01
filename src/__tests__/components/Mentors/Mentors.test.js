import React from "react";
import Mentors from "../../../components/Mentors";
import { shallow } from "enzyme";

describe("Mentors", () => {
  it("renders correctly", () => {
    expect(shallow(<Mentors />)).toMatchSnapshot();
  });
});
