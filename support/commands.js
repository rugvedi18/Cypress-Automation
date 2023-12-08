// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// <reference types="cypress-xpath" /> // when using xpath add this command - see plugin cypress for more details

/// <reference types="Cypress" />

Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap)
})

// Custom command for clicking on a link by its text
Cypress.Commands.add("clickLinkByText", (label) => {
  cy.get("a").contains(label).click() // contains is a case sensitive command
})

// overwriting type command to hide password into the console log
Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    })
  }
  return originalFn(element, text, options)
})

// overwriting conatins command to make label in sensitive
Cypress.Commands.overwriteQuery(
  "contains",
  function (contains, filter, text, userOptions = {}) {
    // This is parameter resolution from Cypress v12.7.0 source
    if (Cypress._.isRegExp(text)) {
      // .contains(filter, text)
      // Do nothing
    } else if (Cypress._.isObject(text)) {
      // .contains(text, userOptions)
      userOptions = text
      text = filter
      filter = ""
    } else if (Cypress._.isUndefined(text)) {
      // .contains(text)
      text = filter
      filter = ""
    }
    userOptions.matchCase = false
    let contains0 = contains.bind(this) // this line fixes the error
    return contains0(filter, text, userOptions)
  }
)

// custom command for login by username and password
Cypress.Commands.add("loginapp", (email, password) => {
  cy.get("#Email").type(email)
  cy.get("#Password").type(password)
  cy.get("button[class='button-1 login-button']").click()
})
