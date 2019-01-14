import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import cubes3webp from "../assets/img/icons/cubes-3.webp";
import cubes3png from "../assets/img/icons/cubes-3.png";
import david from "../assets/img/speakers/davidHariri.jpg";
import kaheer from "../assets/img/speakers/kaheerSuleman.jpg";
import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "David Hariri",
    title: "Co-Founder of Ada",
    description:
      "David is the Co-Founder and current Head of Design at Ada. He graduated from Queen’s University’s Geological and Earth Sciences program in 2012. At Ada, he is designing and built tools that allow companies to answer common questions automatically, improving customer satisfaction and saving everyone's time. Ada is used by Telus, Medium, Wattpad, Shopify and millions of their customers.",
    image: david
  },
  {
    name: "Kaheer Suleman",
    title: "Principal Research Program Manager at Microsoft",
    description:
      "Kaheer is a Principal Research Program Manager at the Microsoft Research Montreal lab.  Kaheer co-founded the deep learning for language startup Maluuba and served as its CTO prior to its acquisition, by Microsoft,  in early 2017.  He currently works on machine learning approaches for natural language processing focusing on question answering, conversation systems and common sense reasoning.",
    image: kaheer
  }
];

const Speakers = () => (
  <section
    css={{
      backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id="speakers"
  >
    <ContentWrapper>
      <h1
        css={{
          paddingTop: "112px",
          paddingBottom: "48px",
          textAlign: "center",
          position: "relative",
          zIndex: "3",
          "@media(max-width: 820px)": {
            paddingTop: "200px",
            paddingBottom: "24px"
          }
        }}
      >
        Fireside Chat Speakers
      </h1>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
          position: "relative",
          zIndex: 3,
          maxWidth: speakers.length * 500,
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: speakers
            .map(() => "1fr ")
            .reduce((a, b) => a + b),
          "@media(max-width: 820px)": {
            display: "none"
          }
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard {...speaker} key={speaker.name} />
        ))}
      </div>
      {/* Mobile */}
      <div
        css={{
          paddingBottom: "30px",
          "@media(min-width: 820px)": { display: "none" }
        }}
      >
        <SpeakerSlider speakers={speakers} />
      </div>
      <picture
        css={{
          zIndex: "1",
          width: "235px",
          height: "289px",
          position: "absolute",
          bottom: "-250px",
          right: "62px",
          display: "block",
          "@media(max-width: 1000px)": {
            display: "none"
          }
        }}
      >
        <source srcSet={cubes3webp} type="image/webp" />
        <source srcSet={cubes3png} type="image/png" />
        <img
          css={{
            "@media(max-width: 1000px)": {
              display: "none"
            }
          }}
          src={cubes3png}
          alt="Floating cubes"
        />
      </picture>
      <Mentors />
    </ContentWrapper>
  </section>
);

export default Speakers;
