describe('CssLocators', () => {

    it('csslocators', () => {

        cy.visit("https://dapper-pastelito-04ff24.netlify.app/") // website

        cy.get(".sc-crozmw").click() // by class (shop now)

        cy.get(".bKVxEB").type("shoes")

        cy.get(".search").click()

        cy.get('[alt="mens-shoes60"]').click()

        //cy.scrollTo(0, 300);

        //cy.get('button.ui.large.button:contains("Add to cart")').click({ multiple: true }); // will not work beacuse Cypress doesn't support multiple browsers windows/tabs.

        cy.scrollTo('top');

        cy.get('[href="/shop"]').click()

    })
})