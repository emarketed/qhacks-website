import React from "react";
import MentorCard from "../../../components/MentorCard";
import { shallow } from "enzyme";

const mentor = {
  name: "Eric Braun",
  title: "Machine Learning Engineer",
  headshot: "eric.png",
  companyLogo: "qualcomm.png",
  companyName: "Qualcomm",
  companyUrl: "https://www.qualcomm.com/"
};

describe("MentorCard", () => {
  it("renders correctly", () => {
    expect(shallow(<MentorCard {...mentor} />)).toMatchSnapshot();
  });
});
