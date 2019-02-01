describe("Sponsors", () => {
  beforeEach(() => {
    cy.visit("/#sponsors");
  });

  it("should have a prompt for new potential partners", () => {
    cy.get("[data-cy=partners-email-prompt]")
      .should("have.text", "partnership@qhacks.io")
      .should("have.attr", "href", "mailto:partnership@qhacks.io");
  });

  describe("Links", () => {
    const sponsorURLs = [
      "https://tucows.com",
      "https://stdlib.com",
      "https://sunlife.ca",
      "http://www.iganpartners.com",
      "https://distributed.computer",
      "https://www.nbc.ca",
      "https://snap.com",
      "https://consensys.net",
      "https://td.ca",
      "https://ratehub.ca",
      "https://scotiabank.ca",
      "https://loopio.com",
      "https://www.telus.com/en",
      "https://www2.deloitte.com/ca/en.html",
      "https://www.cse-cst.gc.ca/en",
      "https://balsamiq.com",
      "https://careers.google.com",
      "https://ritual.co",
      "https://sketchapp.com",
      "https://www.launchacademy.ca",
      "https://www.mosaicmfg.com",
      "https://wake-ups.com",
      "https://1password.com",
      "https://www.apollographql.com",
      "https://www.ycombinator.com",
      "https://www.shopify.com",
      "https://www.foundersbeta.com",
      "https://indico.io",
      "https://wolfram.com/language",
      "https://www.orangegate.ca",
      "https://ramen.vc",
      "https://www.ece.queensu.ca",
      "http://www.cs.queensu.ca",
      "https://smith.queensu.ca/grad_studies/mei",
      "https://queensu.ca/innovationcentre",
      "https://dining.queensu.ca",
      "https://www.cityofkingston.ca/city-hall/projects-construction/mayors-innovation-challenge",
      "https://www.bloomberg.com/canada",
      "https://www.stickermule.com/ca",
      "https://education.github.com/pack",
      "https://mlh.io",
      "http://thepcc.net",
      "https://coinsquare.com",
      "https://munvo.com",
      "https://www.queensu.ca/"
    ];

    it("should contain the proper number of sponsors", () => {
      cy.get("[data-cy=sponsor-link]").should(
        "have.length",
        sponsorURLs.length
      );
    });

    it("should contain the proper urls", () => {
      sponsorURLs.forEach((url) => cy.get(`[data-cy=sponsor-link][href="${url}"]`).should('exist'));
    });
  });
});
