// click on link using label
// overwriting existing contains() command
// re-usable custom command

describe("Custom Commands", () => {
  it("Handling Links", () => {
    cy.visit("https://demo.nopcommerce.com/")
    // direct approach
    // cy.get(":nth-child(2) > .product-item > .details > .product-title > a").click()

    // using custom command
    cy.clickLinkByText("Apple MacBook Pro 13-inch")
    cy.get("h1").should("have.text", "Apple MacBook Pro 13-inch")
  })

  it.only("Overwriting Existing Command", () => {
    // password is visible with type command into the log so we have to unhide it into the log
    cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
    // to hide password into the log (see commands.js)
    cy.get("#Email").type("admin@gmail.com")
    cy.get("#Password").type("admin123", { sensitive: true })
    // to check case sensitivity (see commands.js)
    //cy.clickLinkByText("LOG IN", { matchCase: false })
    //cy.get(".ico-logout").should("have.text", "Log out")
  })

  it("Login Command", () => {})
})
