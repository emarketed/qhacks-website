import React from "react";
import ContentWrapper from "./ContentWrapper";

const questionsAndAnswers = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a sprint-like event where people from a variety of backgrounds come together to collaborate on software and hardware projects."
  },
  {
    question: "Who is invited?",
    answer:
      "Any college or university student of any skill level! All you need is a passion for tech/data/design and a willingness to learn! We welcome applicants from all fields of study."
  },
  {
    question: "Where is it?",
    answer:
      "QHacks will be taking place at Queen's University in the city of Kingston, Ontario. The event will be held in Mitchell Hall. Don’t worry about getting lost! We will have maps for you and volunteers all over campus to guide the way."
  },
  {
    question: "How much does it cost to attend?",
    answer: "Absolutely nothing! Not one penny. (Remember those?)"
  },
  {
    question: "What if I don’t have a team?",
    answer:
      "Not to worry! We'll have a team-formation session prior to the hackathon for you to find people you’d like to work with. There will be plenty of other people in the same situation, and we’ll have you up and running in no time!"
  },
  {
    question: "What if I don’t have an idea?",
    answer:
      "Ideas can come from anywhere! Call a friend, ask your mom, or check out our Facebook group to discuss with other hackers. Sponsors will also provide different project prompts during opening ceremonies to get the juices flowing."
  },
  {
    question: "Can I work on a past project?",
    answer: "No. All projects must be started from scratch at the event."
  },
  {
    question: "What if I’m new to programming?",
    answer:
      "That's okay! A hackathon is a great place to gain valuable experience. There will be tutorials, workshops and mentors to help throughout the event!"
  },
  {
    question: "What can I create?",
    answer:
      "Anything you’d like! Whether it's a new mobile app, website, or a cool project using something from the hardware lab, it’s really up to you. The possibilities are endless."
  },
  {
    question: "What should I bring?",
    answer:
      "Bring whatever helps you hack! Some important items to bring include a valid form of student ID, laptop and charger, deodorant (arguably mandatory) and maybe a sleeping bag and change of clothes. If you have specific hardware you’d like to work with, feel free to bring it. MLH will also be providing a hardware lab with a wide range of items."
  },
  {
    question: "How will my project be judged?",
    answer:
      "Industry experts from a variety of organizations will be coming to QHacks to view your projects. Pitch them your idea, show them a demo, and answer their questions for your chance to win awesome prizes."
  },
  {
    question: "Is there a Code of Conduct?",
    answer: (
      <span>
        Yes! Hackers are expected to adhere to the{" "}
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          rel="external noopener"
          target="_blank"
        >
          Major League Hacking Code of Conduct.
        </a>
      </span>
    )
  },
  {
    question: "What if I'm not from Kingston?",
    answer:
      "Encountering a 307 status? We'll be sending busses to Montreal, Ottawa, Toronto and Waterloo. If those aren't convenient for you, we'll be offering travel reimbursements on a case by case basis."
  }//,
  // {
  //   question: "How do I apply?",
  //   answer:
  //     "Applications will roll out at the end of November, so make sure to stay in the loop by following our social media pages or signing up for our newsletter (link to top). You don't need to be an expert hacker or to have been to a hackathon before - we just want to see what makes you creative and unique!"
  // }
];

const linkCss = {
  textDecoration: "underline",
  color: "#c81c2e",
  fontWeight: "400"
};

const FAQs = () => (
  <section id="faq" css={{ backgroundColor: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          padding: "110px 0 114px 0",
          "@media(max-width: 780px)": {
            padding: "64px 0 120px 0"
          }
        }}
      >
        <h1>Frequently Asked Questions</h1>
        <div
          css={{
            paddingTop: "36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media(max-width: 1190px)": {
              display: "block"
            }
          }}
        >
          {questionsAndAnswers.map(({ question, answer }) => (
            <div
              key={question}
              css={{
                padding: "0px 64px 40px 0px",
                "@media(max-width: 780px)": {
                  paddingRight: "24px"
                }
              }}
            >
              <h2
                css={{
                  paddingBottom: "10px",
                  fontWeight: "500"
                }}
              >
                {question}
              </h2>
              <p
                css={{ fontSize: "14px", color: "#000000", lineHeight: "20px" }}
              >
                {answer}
              </p>
            </div>
          ))}
          <div css={{ paddingTop: "12px" }}>
            <h2 css={{ paddingBottom: "10px", fontWeight: "500" }}>
              Have additional questions?
            </h2>
            <p css={{ fontSize: "14px", color: "#000000", lineHeight: "20px" }}>
              Feel free to reach out to us at{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="mailto:hello@qhacks.io"
              >
                hello@qhacks.io
              </a>{" "}
              or on{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="https://fb.com/qhacks"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
