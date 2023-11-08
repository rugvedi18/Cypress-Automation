// cypress does not support opening a tab in other window so will use one method to open child tab in same window by removing target='blank' from code

describe("Handle tabs", () => {
  it("Approach1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

    cy.get(".example >a").invoke("removeAttr", "target").click() // remove target attribute from the code so that it will open on the same window

    cy.url().should("include", "https://the-internet.herokuapp.com/windows/new") // child tab

    cy.get(".example >h3 ").should("have.text", "New Window")
    cy.wait(3000)
    cy.go("back") // back to parent tab
    cy.get(".example").should("have.contain", "Opening a new window")
  })

  it.only("Approach2", () => {
    // limitation is - domain must be same
    cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

    cy.get(".example >a").then((e) => {
      // storing href link into variable and then visiting the link
      let url = e.prop("href")
      cy.visit(url)
    })

    cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
    cy.wait(3000)
    cy.go("back") // back to parent tab
    cy.get(".example").should("have.contain", "Opening a new window")
  })
})
