import "cypress-iframe"
require("@4tw/cypress-drag-drop")

describe("Mouse Operations", () => {
  it("Mouse Hover", () => {
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

  it("Right Click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    // Approach 1
    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
    // cy.get(".context-menu-icon-copy > span").should("be.visible", "Copy")

    // Approach 2
    cy.get(".context-menu-one.btn.btn-neutral").rightclick()
    cy.get(".context-menu-icon-copy > span").should("be.visible", "Copy")
  })

  it("Double Click", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    )
    cy.frameLoaded("#iframeResult") // to load the iframe

    // Approach 1
    // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
    // cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")

    // Approach 2
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick()
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!")
  })

  it("Drag and Drop using Plugin", () => {
    // npm i @4tw/cypress-drag-drop - plugin to drag and drop action
    cy.visit(
      "https://www.javascripttutorial.net/sample/webapis/drag-n-drop-basics/"
    )
    cy.get(".item").drag(
      "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)"
    )
    // ,{force:true} - if it shows item not found error
  })

  it.only("Scrolling Page", () => {
    cy.visit(
      "https://www.countries-ofthe-world.com/flags-of-the-world.html"
    ).contains("Country flags of the world")
    // scroll the page till the element get displayed, slowly scrolling using duration
    cy.get("img[alt='Flag of India']")
      .scrollIntoView({ duration: 3000 })
      .should("be.visible", "India")

    cy.wait(1000)

    cy.get("img[alt='Flag of Australia']")
      .scrollIntoView({ duration: 3000 })
      .should("be.visible", "Australia")

    cy.wait(1000)

    cy.get(".read-next")
      .scrollIntoView({ duration: 3000 })
      .should("be.visible", "READ NEXT")
  })
})
