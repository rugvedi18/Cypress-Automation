// see LoginPage.js
// import Login from "./LoginPage"
import Login from "./LoginPage2"

describe("pom", () => {
  //General approach 1 without using page object class
  it("LoginTest", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    )
  })

  // Approach 2 using Page object class
  it("LoginTest", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    const ln = new Login()
    ln.setUserName("Admin")
    ln.setPassword("admin123")
    ln.clickSubmit()
    ln.verifyLogin()
  })

  // Approach 3 using Page object model with fixtures
  it.only("LoginTest", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    // fixture folder has json file which stores username and password data, we will fetch data using then
    cy.fixture("orangehrm").then((data) => {
      const ln = new Login()
      ln.setUserName(data.username)
      ln.setPassword(data.password)
      ln.clickSubmit()
      ln.verifyLogin()
    })
  })
})
