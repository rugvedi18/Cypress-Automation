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

  it("Overwriting Existing Command - type", () => {
    // Visit the login page
    cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")

    // Enter login credentials
    cy.get("#Email").type("admin123@gmail.com")
    cy.get("#Password").type("admin123", { sensitive: true })

    // Click the login button
    cy.get(".button-1.login-button").click()
  })

  it.only("Overwriting contains command", () => {
    cy.visit("https://demo.nopcommerce.com/")
    cy.clickLinkByText("APPLE MACBOOK PRO 13-inch")
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    )
  })
})
