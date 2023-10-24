// first go to commands.js to write xpath reference

// then go to e2e.js to write require function

// then go to website to select xpath

// to get all pictures from ecommerce app -
// syntax- //ul[@id='homefeatured']/li

describe('XPathLocators', () => {

    it('find no of products', () => {
        cy.visit("https://")
        //cy.get
        cy.xpath("//ul[@id='homefeatured']").should('have,length', 7)

    })
})