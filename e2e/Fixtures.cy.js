// to use test data into the tests e.g. to use test data having file extension json - store files like these into fixtures folder

describe("Fixtures", () => {
  // if there are multiple it blocks which need files from fixture then use before hook
  let userdata
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userdata = data
    })
  })

  it.only("Demo", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    )

    // cy.get("input[placeholder='Username']").type("Admin") // static

    //cy.fixture("orangehrm").then((data) => { // no need to write this statement if before hook is present
    cy.get("input[placeholder='Username']").type(userdata.username) // dynamic
    cy.get("input[placeholder='Password']").type(userdata.password)
    cy.get("button[type='submit']").click()

    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      userdata.expected
    )
    //})
  })
})
