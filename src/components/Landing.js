import React from "react";

import Header from "./Header";
// import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import landingImg from "../assets/img/icons/landingImg.svg";
import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-colored.svg";
import backgroundCubes from "../assets/img/backgrounds/backgroundCubes.svg";

// const applyButtonCSS = {
//   margin: "25px 0 100px 0",
//   "@media(max-width: 820px)": {
//     margin: "30px 0 45px auto"
//   }
// };

const Landing = () => (
  <div
    id=""
    css={{
      width: "100%",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "600px"
      }
    }}
  >
    <Header standaloneVersion={false} />
    <ContentWrapper>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            "@media(min-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "215px"
            },
            "@media (min-width: 821px) and (max-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "215px"
            }
          }}
        >
          <img
            data-cy="qhacks-crown"
            src={logo}
            width="170px"
            css={{ "@media(max-width: 820px)": { display: "none" } }}
            alt="QHacks Crown"
          />
          <img
            src={landingImg}
            css={{
              width: "75vw",
              maxWidth: "350px",
              "@media(min-width: 821px)": { display: "none" }
            }}
            alt="QHacks Illustration"
          />
          <br />
          <img
            data-cy="qhacks-wordmark"
            src={word}
            css={{
              paddingTop: "40px",
              paddingBottom: "18px",
              width: "100vw",
              maxWidth: "300px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "192px",
                paddingBottom: "8px"
              }
            }}
            alt="QHacks Wordmark"
          />
          <h2
            data-cy="qhacks-information"
            css={{
              color: "#00205b",
              fontWeight: 600,
              fontSize: "22px",
              paddingBottom: "30px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            Queen’s University • February 1-3, 2019
          </h2>
          <h2
            data-cy="qhacks-tagline"
            css={{
              padding: "20px 0 100px",
              color: "#575757",
              fontWeight: 500,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "20px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Queen’s University’s annual hackathon.
            <br />
            Join us for an unforgettable experience!
          </h2>
          {/* <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://app.qhacks.io/qhacks-2019/apply"
            type="rounded"
          >
            Apply
          </ActionButton> */}
        </div>
        <div
          css={{
            position: "relative",
            textAlign: "right",
            display: "flex",
            paddingTop: "84px",
            alignItems: "center",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "100%"
            }}
            alt="QHacks Illustration"
          />
        </div>
      </section>
    </ContentWrapper>
  </div>
);

export default Landing;
