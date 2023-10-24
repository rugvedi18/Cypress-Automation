/// <reference types="Cypress" />

describe('My Test', () => {
    it('test1', () => {
        // launch an application - positive test
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('test2', () => {
        // launch an application - negative test
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
    })
})