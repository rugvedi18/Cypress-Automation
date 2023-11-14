// https://demo.opencart.com/admin [admin:admin]
// go to customers -> customers, you will see the table

// demo.opencart/admin is having security to verify you are human so using alternate website to handle tables -
// https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html
// refer file - TechlisticTable.cy.js

describe("Handle Tables", () => {
  // beforeEach is one of the hooks in cypress
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/", { failOnStatusCode: false })

    // verify you are human by checking the checkbox
    //cy.get("input[type='checkbox']").should("be.visible").click()

    cy.get("#input-username").type("demo")
    cy.get("#input-password").type("demo")
    cy.get("[type='submit']").click()
    cy.get(".btn-close").click()

    // customers -> customers
    cy.get("[href='#collapse-5']").click()
    cy.get("#menu-customer>ul>li:first-child").click()
  })

  it("Check number of rows & columns", () => {
    // first find the table tag then get all rows by using tbody>tr
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    )

    // all columns by using thead>td
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "7")
  })

  it("Check cell data from specific row & column", () => {
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("hfgjhgjgjggj@gmail.com")
  })

  it.only("Read all the rows and columns data in the first page", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text())
          })
        })
      }
    )
  })
})
