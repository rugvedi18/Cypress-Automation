// see PageObjectModel.cy.js
// page object class - Approach 2 contains elements and action methods differently

class Login {
  // all locators defined separately
  txtUsername = "input[placeholder='Username']"
  txtPassword = "input[placeholder='Password']"
  btnSubmit = "button[type='submit']"
  lblmsg = ".oxd-topbar-header-breadcrumb > .oxd-text"

  // methods contain locators
  setUserName(username) {
    cy.get(this.txtUsername).type(username)
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password)
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click()
  }

  verifyLogin() {
    cy.get(this.lblmsg).should("have.text", "Dashboard")
  }
}

export default Login
