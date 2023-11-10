/// <reference types="Cypress" />

import "cypress-iframe"

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

  it("Approach2 - by using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe")

    cy.getIframe("#mce_0_ifr")
      .clear()
      .type("Welcome to cypress automation. {ctrl+a}")

    cy.get("[title='Bold']").click()
  })

  // npm i -D cypress-iframe
  it.only("Approach3 - by using cypress iFrame plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe")

    cy.frameLoaded("#mce_0_ifr") // to load the frame

    cy.iframe("#mce_0_ifr")
      .clear()
      .type("Keep me in center. Thank you! {ctrl+a}") // to interact with the frame
    cy.get("[title='Align center']").click()
  })
})
