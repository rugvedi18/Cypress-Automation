/// <reference types="Cypress" />

// Types of dropdowns

describe("Drop Down", () => {
  it.skip("Dropdown with select tag", () => {
    /* cy.on('uncaught:exception') is an event in Cypress that is triggered whenever an uncaught exception occurs in the application code. 
It allows you to handle the exception in a specific way, such as logging the error message or taking a screenshot.
The code above uses the cy.on command to register a callback function that will be executed whenever a test fails. 
The callback function takes two arguments: e and runnable.

e returns information about the error that occurred. It has a message property that can be accessed to get the error message.
runnable represents the test that failed. It has properties such as title, fullTitle, and parent.
The callback function logs the error message to the console using console.log(e.message). 
The function also returns false, telling Cypress not to log the error to the command log or the test results.

This is useful if you want to handle the error in a specific way and do not want Cypress to log the error as part of the test results. */

    cy.on("uncaught:exception", (e, runnable) => {
      console.log("error", e)
      console.log("runnable", runnable)
      return false
    })
    // selet tag is present in inspect, we can use select tag to write a code
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country").select("Chile").should("have.value", "Chile")
  })

  it.skip("Dropdown without select tag", () => {
    // select tag is not present, dropdown is using bootstrap
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container").click()
    cy.get(".select2-search__field").type("italy").type("{enter}") // to click enter
    cy.get("#select2-billing_country-container").should("have.text", "Italy")
  })

  it.skip("Auto suggest Dropdown", () => {
    cy.visit("https://www.wikipedia.org/")
    cy.get("input[name='search']").type("delhi")
    cy.get(".suggestion-title").contains("Delhi University").click()
    cy.get(".mw-page-title-main").should("have.text", "Delhi University")
  })

  it("Dynamic Dropdown", () => {
    cy.visit("https://www.google.com/")
    cy.get("textarea[name='q']").type("cypress automation")
    cy.wait(3000)
    // cy.get(".wM6W7d").contains("cypress automation tutorial").click()
    // to checl number of suggestions
    cy.get("div.wM6W7d>span").should("have.length", 12)

    // for each loop to check all values present in div
    // sometimes it is working
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() == "cypress automation tutorial") {
        cy.wrap($el).click()
      }
    })
  })
})
