// website - orangeHRM demo

/*

Cypress Assertions (search on google) - derived from chai library
------------------------------------------------

1. Implicit Assertions - should, and

eq      - not.eq
contain - not.contain
include - not.include
exist   - not.exist

2. Explicit Assertions - expect (used in BDD approach framework), assert (used in TDD approach framework)

*/


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

        cy.url().should('include', 'orangehrmlive.com')
            .and('contain', 'opensource-demo')
            .and('not.contain', 'greenhrm') // not contain
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('include', 'OrangeHRM') // title of the page

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') // logo

        cy.get("input[placeholder='Username']").type('Admin') // Username as Admin
        cy.get("input[placeholder='Username']").should('have.value', 'Admin') // to check value
        // .and('have.value', 'Admin')
    })

    // Explicit Assertions
    it("Explicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName = "as s";

        cy.get(".oxd-userdropdown-name").then((x) => {

            // BDD style
            let actName = x.text()
            expect(actName).to.equal(expName)

            // TDD style
            assert.equal(actName, expName)
            assert.notEqual(actName, "expName")
        })
    })

})