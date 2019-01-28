import React from "react";
import MentorCard from "./MentorCard";

// Company Logos
import shopfiy from "../assets/img/mentors/logos/shopify.svg";
import microsoft from "../assets/img/mentors/logos/microsoft.svg";
import axiomZen from "../assets/img/mentors/logos/axiomZen.svg";
import qualcomm from "../assets/img/mentors/logos/qualcomm.svg";
import google from "../assets/img/mentors/logos/google.svg";
import rbc from "../assets/img/mentors/logos/rbc.svg";
import tenThousandCoffees from "../assets/img/mentors/logos/tenThousandCoffees.svg";
import kindred from "../assets/img/mentors/logos/kindred.svg";
import cortex from "../assets/img/mentors/logos/cortex.svg";
import munvo from "../assets/img/mentors/logos/munvo.svg";
import opencare from "../assets/img/mentors/logos/opencare.svg";
import opener from "../assets/img/mentors/logos/opener.svg";
import uber from "../assets/img/mentors/logos/uber.svg";
import accenture from "../assets/img/mentors/logos/accenture.svg";

// Mentor headshots
import john from "../assets/img/mentors/headshots/johnMartin.jpg";
import fitz from "../assets/img/mentors/headshots/nicoleFitz.png";
import layne from "../assets/img/mentors/headshots/layneLafrance.jpg";
import eric from "../assets/img/mentors/headshots/ericBraun.jpg";
import vivek from "../assets/img/mentors/headshots/vivekChachcha.jpg";
import enoch from "../assets/img/mentors/headshots/enochTam.jpg";
import graham from "../assets/img/mentors/headshots/grahamMiller.jpg";
import zach from "../assets/img/mentors/headshots/zackHarley.jpg";
import stefan from "../assets/img/mentors/headshots/stefanSokic.jpg";
import ivan from "../assets/img/mentors/headshots/ivanZhang.jpg";
import alex from "../assets/img/mentors/headshots/alexAdusei.jpg";
import emma from "../assets/img/mentors/headshots/emmaKoza.png";
import ese from "../assets/img/mentors/headshots/eseOkonofua.jpeg";
import khalid from "../assets/img/mentors/headshots/khalidKarim.jpg";
import lydia from "../assets/img/mentors/headshots/lydiaNoureldin.jpg";
import aj from "../assets/img/mentors/headshots/anujArora.jpeg";

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
    name: "Vivek Chachcha",
    title: "Product Technology Manager",
    headshot: vivek,
    companyLogo: google,
    companyName: "Google",
    companyUrl: "https://careers.google.com",
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
  {
    name: "Stefan Sokic",
    title: "Software Engineer",
    headshot: stefan,
    companyLogo: kindred,
    companyName: "Kindred.ai",
    companyUrl: "https://www.kindred.ai/"
  },
  {
    name: "Enoch Tam",
    title: "Software Engineer",
    headshot: enoch,
    companyLogo: google,
    companyName: "Google",
    companyUrl: "https://careers.google.com",
    logoMarginTop: "-10px",
    logoHeight: "80px"
  },
  {
    name: "Ivan Zhang",
    title: "Machine Learning Infrastructure Engineer",
    headshot: ivan,
    companyLogo: cortex,
    companyName: "Cortex",
    companyUrl: "https://www.cortexlabs.com",
    logoMarginTop: "-15px",
    logoHeight: "60px"
  },
  {
    name: "Lydia Noureldin",
    title: "Software Development Consultant",
    headshot: lydia,
    companyLogo: munvo,
    companyName: "Munvo",
    companyUrl: "https://munvo.com/",
    logoMarginTop: "15px",
    logoHeight: "30px"
  },
  {
    name: "Ese Okonofua",
    title: "Software Engineer",
    headshot: ese,
    companyLogo: microsoft,
    companyName: "Microsoft",
    companyUrl: "https://microsoft.com",
    logoMarginTop: "10px"
  },
  {
    name: "Alex Adusei",
    title: "Software Engineer",
    headshot: alex,
    companyLogo: opener,
    companyName: "Opener",
    companyUrl: "https://www.opener.aero/",
    logoHeight: "60px"
  },
  {
    name: "Emma Koza",
    title: "Software Engineer",
    headshot: emma,
    companyLogo: opencare,
    companyName: "Opencare.com",
    companyUrl: "https://opencare.com",
    logoWidth: "200px",
    logoMarginTop: "5px"
  },
  {
    name: "Anuj Arora",
    title: "Consulting Analyst",
    headshot: aj,
    companyLogo: accenture,
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/",
    logoHeight: "40px",
    logoMarginTop: "0"
  },
  {
    name: "Khalid Karim",
    title: "Senior Product Manager",
    headshot: khalid,
    companyLogo: uber,
    companyName: "Uber",
    companyUrl: "https://uber.com",
    logoHeight: "30px",
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
