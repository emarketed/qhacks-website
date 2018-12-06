import React from "react";
import MentorCard from "./MentorCard";

// Company Logos
import shopfiy from "../assets/img/mentors/logos/shopify.svg";
import microsoft from "../assets/img/mentors/logos/microsoft.svg";
import axiomZen from "../assets/img/mentors/logos/axiomZen.svg";
import qualcomm from "../assets/img/mentors/logos/qualcomm.svg";
import google from "../assets/img/mentors/logos/google.svg";
import nest from "../assets/img/mentors/logos/nest.svg";
import rbc from "../assets/img/mentors/logos/rbc.svg";
import tenThousandCoffees from "../assets/img/mentors/logos/tenThousandCoffees.svg";

// Mentor headshots
import john from "../assets/img/mentors/headshots/johnMartin.jpg";
import fitz from "../assets/img/mentors/headshots/nicoleFitz.png";
import layne from "../assets/img/mentors/headshots/layneLafrance.jpg";
import eric from "../assets/img/mentors/headshots/ericBraun.jpg";
import vivek from "../assets/img/mentors/headshots/vivekChacha.jpg";
import enoch from "../assets/img/mentors/headshots/enochTam.jpg";
import graham from "../assets/img/mentors/headshots/grahamMiller.jpg";
import zach from "../assets/img/mentors/headshots/zackHarley.jpg";

const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Eric Braun",
    title: "Machine Learning Engineer",
    headshot: eric,
    companyLogo: qualcomm,
    companyName: "Qualcomm",
    companyUrl: "https://www.qualcomm.com/"
  },
  {
    name: "Vivek Chacha",
    title: "Software Engineer",
    headshot: vivek,
    companyLogo: google,
    companyName: "Google",
    companyUrl: "https://www.google.com",
    logoMarginTop: "-20px",
    logoHeight: "80px"
  },
  {
    name: "Nicole Fitzgerald",
    title: "Machine Learning Engineer",
    headshot: fitz,
    companyLogo: microsoft,
    companyName: "Microsoft",
    companyUrl: "https://www.microsoft.com"
  },
  {
    name: "John Martin",
    title: "Data Platform Engineer",
    headshot: john,
    companyLogo: shopfiy,
    companyName: "Shopify",
    companyUrl: "https://www.shopify.com",
    logoHeight: "45px"
  },
  {
    name: "Layne Lafrance",
    title: "Product Manager",
    headshot: layne,
    companyLogo: axiomZen,
    companyName: "AxiomZen",
    companyUrl: "https://www.axiomzen.co/",
    logoHeight: "25px",
    logoMarginTop: "10px"
  },
  {
    name: "Zack Harley",
    title: "Software Engineer",
    headshot: zach,
    companyLogo: tenThousandCoffees,
    companyName: "Ten Thousand Coffees",
    companyUrl: "https://www.tenthousandcoffees.com/",
    logoWidth: "60px",
    logoHeight: "60px"
  },
  {
    name: "Graham Miller",
    title: "Software Engineer",
    headshot: graham,
    companyLogo: rbc,
    companyName: "RBC",
    companyUrl: "https://www.rbc.com",
    logoWidth: "40px",
    logoHeight: "60px"
  },
  // {
  //   name: "Stefan Sokic",
  //   title: "Software Engineer",
  //   headshot: stefan,
  //   companyLogo: kindred,
  //   companyName: "Kindred.ai",
  //   companyUrl: "https://www.kindred.ai/"
  // },
  {
    name: "Enoch Tam",
    title: "Software Engineer",
    headshot: enoch,
    companyLogo: nest,
    companyName: "Nest",
    companyUrl: "https://nest.com",
    logoHeight: "30px",
    logoWidth: "75px",
    logoMarginTop: "10px"
  }
];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ fontWeight: "600", fontSize: "28px" }}>
      Additional Speakers and Mentors
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
