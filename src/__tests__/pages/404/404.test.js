import React from "react";
import ErrorPage from "../../../pages/404";
import { shallow } from "enzyme";

describe("ErrorPage", () => {
  it("renders correctly", () => {
    expect(shallow(<ErrorPage />)).toMatchSnapshot();
  });
});
