/// <reference types="Cypress" />

// ecommerce website

describe('CssLocators', () => {

    it('csslocators', () => {

        cy.visit("https://dapper-pastelito-04ff24.netlify.app/") // website

        cy.get(".sc-crozmw").click() // shop now

        cy.get(".bKVxEB").type("shoes") // search for shoes

        cy.get(".search").click() // click on search

        cy.get('[alt="mens-shoes60"]').click() // open first shoes

        //cy.scrollTo(0, 300); // in px

        cy.get('.tablet.only.computer.only.two.column.row .button.ui.large.button:contains("Add to cart")').click(); // parent class and child class

        cy.scrollTo('top')

        cy.get('.sc-ispOId.jYrqzs').click() // click on cart to see list

        // cy.get('[href="/shop"]').click()

        cy.get(".computer.only.four.wide.column.right-col--sticky .ui.button").click()

    })
})