// website - orangeHRM demo

describe("Assertions demo", () => {

    // should - has two parameters .should('key/keyword','value')
    // and
    it("Implicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // url verification using should & and keyword

        // Approach 1
        /* cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('contain','opensource-demo')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') */

        // Approach 2
        /* cy.url().should('include', 'orangehrmlive.com')
        .should('contain','opensource-demo')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') */

        // Approach 3
       /* cy.url().should('include', 'orangehrmlive.com')
        .and('contain','orangehrm')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') */

        // not contain
        cy.url().should('include', 'orangehrmlive.com')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })
})