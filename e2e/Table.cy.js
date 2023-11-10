// https://demo.opencart.com/admin [admin,admin]
// go to customers -> customers, you will see the table

describe("Handle Tables", () => {
  it("Login", () => {
    cy.visit("https://demo:demo@demo.opencart.com/admin/")
    // cy.get("#input-username").type("demo")
    // cy.get("#input-password").type("demo")
    cy.get("[type='submit']").click()
    cy.wait(3000)
    cy.get(".btn-close").click()
    cy.get("[href='#collapse-5']").click()
    cy.get("li>ul>li[class='active']").click()
  })

  // it("Check number of rows & columns", () => {})
})
