/// <reference types="Cypress" />

// Types of dropdowns - select

describe("Drop Down", () => {
  it("Dropdown with select", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    // select from drop-down
    cy.get("#country").select("Germany").should("have.value", "germany");
  });
});
