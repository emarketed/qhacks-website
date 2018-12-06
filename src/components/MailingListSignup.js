import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/circuitsRed.png";

const MailingListSignup = (props) => (
  <section
    css={{
      width: "100%",
      color: "white",
      minHeight: "270px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `#C12232 url(${circuits}) no-repeat center center`,
      backgroundSize: "cover"
    }}
  >
    <ContentWrapper>
      <p
        data-cy="mailing-list-cta"
        css={{
          fontWeight: 700,
          marginTop: "20px",
          marginBottom: "28px",
          fontSize: "22px",
          "@media screen and (max-width: 860px)": {
            fontSize: "16px"
          },
          lineHeight: "28px",
          textAlign: "center"
        }}
      >
        Sign up for our mailing list to receive important QHacks announcements!
      </p>
      <SignUpForm
        dataCyInput="mailing-list-input"
        dataCyButton="mailing-list-button"
        hoverBackgroundColor="#00205b"
        center={true}
      />
    </ContentWrapper>
  </section>
);

export default MailingListSignup;
