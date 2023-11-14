describe("Handle Table on Techlistic", () => {
  it("Demo Table 1 - Static Table", () => {
    cy.visit(
      "https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html"
    )
    cy.get("table#customers>tbody>tr").should("have.length", 7)
  })
})
