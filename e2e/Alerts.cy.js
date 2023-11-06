/// <reference types="Cypress" />

describe("Alerts", () => {
  // 1) Javascript Alert: It will have some test and an 'OK' button
  it("JS Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on("window:alert", (t) => {
      expect(t).contains("I am a JS Alert")
    })

    // alert window automatically closed by JS
    cy.get("#result").should("have.text", "You successfully clicked an alert")
  })
  // 2) Javascript confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
  // 3) Javascript prompt Alert: It will have some text with a text box for user input along with 'OK'
  // 4) Authenticated Alert
})
