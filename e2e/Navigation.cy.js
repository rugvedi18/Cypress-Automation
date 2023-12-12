describe("navigation", () => {
  it("NavigationTest", () => {
    cy.visit("https://demo.opencart.com/")
    cy.title().should("eq", "Your Store") // Home page

    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)"
    ).click()
    cy.get("div[id='content'] h2").should("have.text", "Cameras") // Camera page

    // Approach 1
    cy.go("back") // Go back to Home Page
    cy.title().should("eq", "Your Store") // Home page

    cy.go("forward") // Go to Camera Page
    cy.get("div[id='content'] h2").should("have.text", "Cameras") // Camera page

    // Approach 2
    cy.go(-1) // Go back to Home page
    cy.title().should("eq", "Your Store") // Home page

    cy.go(1) // Go to Camera Page
    cy.get("div[id='content'] h2").should("have.text", "Cameras") // Camera page

    cy.reload() // to reload/refresh the page
  })
})
