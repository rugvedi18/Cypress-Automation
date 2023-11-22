// Hooks - for pre-requisits
// Tags - it.skip, it.only

// for practice - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

describe("Hooks", () => {
  before(() => {
    // executes only once before all it blocks
    cy.log("*** Launch App ***")
  })

  beforeEach(() => {
    // executes before each it block
    cy.log("*** Login ***")
  })

  it("Search", () => {
    cy.log("*** Search ***")
  })

  it.skip("Advanced Search", () => {
    cy.log("*** Advanced Search ***")
  })

  it.only("Listing Products", () => {
    cy.log("*** Listing Products ***")
  })

  afterEach(() => {
    // executes after each it block
    cy.log("*** Logout ***")
  })

  after(() => {
    // executes only once after all it blocks
    cy.log("*** Close App ***")
  })
})
