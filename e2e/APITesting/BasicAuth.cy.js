describe("AUthentications", () => {
  it("Basic Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
      },
    })
  })
})
