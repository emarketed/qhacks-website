import React from "react";
import IndexPage from "../../../pages/index";
import { shallow } from "enzyme";

const data = {
  site: {
    siteMetadata: {
      netlifyEnv: "deploy-preview"
    }
  }
};

describe("IndexPage", () => {
  it("renders correctly", () => {
    expect(shallow(<IndexPage data={data} />)).toMatchSnapshot();
  });
});
