describe('CssLocators', () => {

    it('csslocators', () => {

        cy.visit("https://atharvacm.netlify.app/") // website

        cy.get(".btn-scroll").click() // go to middle

        //cy.get(".back-to-top").click() // go to top

       cy.get('[href="assets/img/portfolio/eAuctionPune.png"]').click();


        // cy.get('[for="fac-modal-research-a-car"]').click() // research a car

        // cy.get(".fac-modal-research-a-car-make-dropdown").type("kia") // make

        // cy.get(".fac-modal-research-a-car-model-dropdown").type("ev6") // model

        // cy.get(".make-model-search_d-make-model-search__btn-wrapper__zYuTX").click() // go

    })
})