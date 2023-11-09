/// <reference types="Cypress" />

describe("Handling iFrames", () => {
  it("Approach1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe")

    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap)

    cy.wait(3000)
    iframe.clear().type("Welcome to cypress automation. {ctrl+a}")
    cy.get("[title='Bold']").click()
  })

  it.only("Approach2 - by using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe")

    cy.getIframe("#mce_0_ifr")
      .clear()
      .type("Welcome to cypress automation. {ctrl+a}")

    cy.get("[title='Bold']").click()
  })
})
