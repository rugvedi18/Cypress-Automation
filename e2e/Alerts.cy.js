/// <reference types="Cypress" />

describe("Alerts", () => {
  // 1) Javascript Alert: It will have some test and an 'OK' button
  it("JS Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on("window:alert", (t) => {
      expect(t).contains("I am a JS Alert")
    })
    // alert window automatically closed by JS using OK button by default
    cy.get("#result").should("have.text", "You successfully clicked an alert")
  })

  // 2) Javascript confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
  it("JS Confirm Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on("window:alert", (t) => {
      expect(t).contains("I am a JS Confirm")
    })
    // alert window automatically closed by JS using OK button by default
    cy.get("#result").should("have.text", "You clicked: Ok")
  })

  it("JS Confirm Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on("window:alert", (t) => {
      expect(t).contains("I am a JS Confirm")
    })
    // cypress will close the window using Cancel button
    cy.on("window:confirm", () => false)
    cy.get("#result").should("have.text", "You clicked: Cancel")
  })

  // 3) Javascript prompt Alert: It will have some text with a text box for user input along with 'OK'
  it("JS Prompt Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    // this event will trigger before opening the alert window, if window is open store in variable -
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome") // type welcom into alert prompt
      cy.get("button[onclick='jsPrompt()']").click()
      // cy.on("window:confirm", () => false)
      cy.get("#result").should("have.text", "You entered: Welcome") // cypress will automatically closed prompted alert by default - OK button
    })
  })

  // 4) Authenticated Alert
  it("JS Authenticated Alert", () => {
    // Approach 1
    // cy.visit("https://the-internet.herokuapp.com/basic_auth", {
    // auth: { username: "admin", password: "admin" },
    // })

    // Approach 2 inside the url
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("#content > div > p").should("have.contain", "Congratulations")
  })
})
