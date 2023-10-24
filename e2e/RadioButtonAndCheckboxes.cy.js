/// <reference types="Cypress" />

// website - https://testautomationpractice.blogspot.com/

describe("Check UI Elements", () => {
    
    it("Checking Radio Buttons", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        // check visibility of radio buttons
        cy.get("input#male").should('be.visible')

        // select radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked') // unselect
        
        // check visibility of checkbox
        cy.get("input#monday").should('be.visible')

        // select single checkbox
        cy.get("input#monday").check().should('be.checked')
        cy.get("input#monday").uncheck().should('not.be.checked') // uncheck

        // selecting all the checkboxes
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')

        // select from drop-down
        cy.get("#country").select('United Kingdom').should('have.value', 'uk')
    })

})