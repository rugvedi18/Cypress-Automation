// click on link using label
// overwriting existing contains() command
// re-usable custom command

describe("Custom Commands", () => {
  cy.visit("https://demo.nopcommerce.com/")

  it.only("Handling Links", () => {
    // direct approach
    // cy.get(":nth-child(2) > .product-item > .details > .product-title > a").click()

    // using custom command
    cy.clicklink("Apple MacBook Pro 13-inch")
    cy.get("h1").should("have.text", "Apple MacBook Pro 13-inch")
  })

  it("Overwriting Existing Command", () => {})

  it("Login Command", () => {})
})
