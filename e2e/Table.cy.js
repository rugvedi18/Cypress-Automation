// https://demo.opencart.com/admin [admin:admin]
// go to customers -> customers, you will see the table

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

  it("Read all the data in rows & columns present on the first page (without pagination)", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      // ($row, index, $rows)
      ($row) => {
        cy.wrap($row).within(() => {
          // ($col, index, $cols)
          cy.get("td").each(($col) => {
            cy.log($col.text())
          })
        })
      }
    )
  })

  it.only("pagination", () => {
    // find total number of pages
    cy.get(".col-sm-6.text-end").then((e) => {
      let mytext = e.text() // Showing 1 to 10 of 16377 (1638 Pages)
      let totalPages = mytext.substring(
        mytext.indexOf("(") + 1,
        mytext.indexOf("Pages") - 1
      )
      cy.log("Total number of pages in table => ", totalPages)
    })

    // extract data from any 3 pages
    let total_pages = 4
    // p is representing page number
    for (let p = 1; p <= total_pages; p++) {
      if (total_pages > 1) {
        // first open the page
        cy.log("Active page is => ", p)
        cy.get(".pagination>li:nth-child(" + p + ")").click()
        cy.wait(3000)

        // extract data - all email ids present on the page
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text())
              })
            })
          }
        )
      }
    }
  })
})
