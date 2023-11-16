// demo.opencart/admin is having security to verify you are human so using alternate website to handle tables -
// https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html
// refer file - TechlisticTable.cy.js

describe("Handle Table on Techlistic", () => {
  it("Demo Table 1 - Static Table", () => {
    cy.visit(
      "https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html"
    )
    cy.get("table#customers>tbody>tr").should("have.length", 7)
  })
})
