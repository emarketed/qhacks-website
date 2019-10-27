import React from "react";
import MentorCard from "./MentorCard";

// Company Logos

// Mentor headshots
import plchldr from "../assets/img/logo/qhacksAppIcon.png";

const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Mentor 1",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 2",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 3",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 4",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 5",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 6",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 7",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
  {
    name: "Mentor 8",
    title: "X at Y",
    headshot: plchldr,
    companyName: "Company",
    companyUrl: "https://www.qhacks.io/"
  },
];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ color: "#ffffff", fontWeight: "600", fontSize: "28px" }}>
      Additional Mentors
    </h1>
    <div
      css={{
        display: "grid",
        "@media (min-width: 1284px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        },
        "@media (max-width: 1284px)": {
          gridTemplateColumns: "auto auto"
        },
        "@media (max-width: 912px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }
      }}
    >
      {mentors.map((mentor, i) => (
        <MentorCard
          {...mentor}
          key={mentor.name}
          borderColor={QHACKS_COLORS[i % 3]}
        />
      ))}
    </div>
  </div>
);
