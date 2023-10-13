describe('CssLocators', () => {

    it('csslocators', () => {

        cy.visit("https://themeforest.net/category/all") // open website

        cy.get(".shared-autosuggest_component__searchInput").type("theme") // write in search bar

        cy.get(".shared-autosuggest_component__searchBtn").click() // click on search button

        //cy.get(".search-search_header_component__heading").contains("theme")
    })

})