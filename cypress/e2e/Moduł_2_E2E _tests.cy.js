/// <reference types="cypress" />

describe("Homework - 2", () => {
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login ");
  });

  it("Test-1", () => {
    cy.login("user888@gmail.com", "1234567890");
    cy.wait(2500);
    cy.get(".css-7afvtf").click();
    cy.wait(1500);
    cy.get(":nth-child(9) > .css-bve2vl").click();
    cy.wait(1500);
  });

  it("Test-2", () => {
    cy.login("testowyqa@qa.team", "QA!automation-1");
    cy.wait(2500);
    cy.get(".css-7afvtf").click();
    cy.wait(1500);
    cy.get(":nth-child(7) > .css-bve2vl").click();
    cy.wait(1500);
  });
});
