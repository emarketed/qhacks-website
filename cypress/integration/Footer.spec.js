describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/#footer");
  });

  it("provides link to 2018 website", () => {
    cy.get("[data-cy=footer-2018-link]")
      .should("have.text", "QHacks 2018 ▸")
      .should("have.attr", "href", "https://2018.qhacks.io");
  });

  it("provides link to local hack day website", () => {
    cy.get("[data-cy=footer-lhd-link]")
      .should("have.text", "Local Hack Day ▸")
      .should("have.attr", "href", "https://localhackday.mlh.io/");
  });

  it("provides link to QHacks blog", () => {
    cy.get("[data-cy=footer-blog-link]")
      .should("have.text", "QHacks Blog ▸")
      .should("have.attr", "href", "https://medium.com/@qhacks");
  });

  it("provides link to QHacks Dashboard", () => {
    cy.get("[data-cy=footer-dashboard-link]")
      .should("have.text", "QHacks Dashboard ▸")
      .should("have.attr", "href", "https://app.qhacks.io");
  });

  it("provides link to MLH Code of Conduct", () => {
    cy.get("[data-cy=footer-mlh-code-of-conduct-link]")
      .should("have.text", "MLH Code of Conduct ▸")
      .should(
        "have.attr",
        "href",
        "https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      );
  });

  it("provides link to our email", () => {
    cy.get("[data-cy=footer-email-link]")
      .should("have.text", "hello@qhacks.io")
      .should("have.attr", "href", "mailto:hello@qhacks.io");
  });

  it("provides link to our Twitter", () => {
    cy.get("[data-cy=footer-twitter-link]")
      .should("have.text", "Follow us on Twitter")
      .should("have.attr", "href", "https://twitter.com/qhacks19");
  });

  it("provides link to our Facebook", () => {
    cy.get("[data-cy=footer-facebook-link]")
      .should("have.text", "Like us on Facebook")
      .should("have.attr", "href", "https://fb.com/qhacks");
  });

  it("provides link to our Instagram", () => {
    cy.get("[data-cy=footer-instagram-link]")
      .should("have.text", "Follow us on Instagram")
      .should("have.attr", "href", "https://instagram.com/qhacks19");
  });

  it("has correct year for copyright notice", () => {
    cy.get("[data-cy=footer-copyright-notice]")
      .should("have.length", 2)
      .each(($el, index, $list) => {
        expect($el).to.have.text(
          `Copyright © ${Cypress.moment().year()} QHacks`
        );
      });
  });

  // TODO: Solve the mysterious apostrophe issue
  // it('has correct address for QHacks', () => {
  //   cy.get('[data-cy=footer-address]').should('have.text', "Queen's University | 99 University Ave, Kingston, ON");
  // });

  // it('has a plug to the cool developers that made the website', () => {
  //   cy.get('[data-cy=footer-dev-plug]').should('have.text', "< /> with ♡ by Queen's students");
  // });

  // continue to write tests for:
  // hover states
  // logo being present
  // mailing list sign up
  // can potentially isolate testing of signup form somewhere else
});
