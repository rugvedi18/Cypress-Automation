// demo.opencart.com

describe("Mouse Operations", () => {
  it.only("Mouse Hover", () => {
    cy.visit("https://demo.opencart.com/")

    cy.get(
      ".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']"
    ).should("not.be.visible")

    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click()

    cy.get(
      ".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']"
    )
      .should("be.visible")
      .and("have.text", "Mac (1)")
  })

  it("Right Click", () => {})

  it("Double Click", () => {})

  it("Drag and Drop using Plugin", () => {})

  it("Scrolling Page", () => {})
})
