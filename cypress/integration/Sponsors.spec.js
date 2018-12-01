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
    it("should contain the proper number of sponsors", () => {
      cy.get("[data-cy=sponsor-link]").should("have.length", 29);
    });

    it("should contain the proper urls", () => {
      const sponsorURLs = [
        "https://tucows.com",
        "https://stdlib.com/",
        "https://sunlife.ca",
        "http://www.iganpartners.com/",
        "https://distributed.computer/",
        "https://www.nbc.ca/",
        "https://consensys.net/",
        "https://td.ca",
        "https://ratehub.ca",
        "https://scotiabank.ca",
        "https://loopio.com",
        "https://www.telus.com/en/",
        "https://www2.deloitte.com/ca/en.html",
        "https://balsamiq.com",
        "https://wolfram.com/language/",
        "https://ritual.co",
        "https://1password.com/",
        "https://sketchapp.com",
        "https://www.mosaicmfg.com/",
        "https://www.launchacademy.ca/",
        "https://www.orangegate.ca/",
        "https://wake-ups.com",
        "https://www.ece.queensu.ca/",
        "https://smith.queensu.ca/grad_studies/mei/",
        "https://queensu.ca/innovationcentre/",
        "https://www.bloomberg.com/canada",
        "https://www.stickermule.com/ca",
        "https://education.github.com/pack",
        "https://mlh.io/"
      ];

      cy.get("[data-cy=sponsor-link]").each(($el, index, $list) => {
        expect($el).to.have.attr("href", sponsorURLs[index]);
      });
    });
  });
});
