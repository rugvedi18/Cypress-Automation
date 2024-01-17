describe("AUthentications", () => {
  it("Basic Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.authenticated).to.eq(true)
    })
  })

  it.only("Digest Authentication", () => {
    cy.log("b4 Response", response)
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/digest-auth",
      auth: {
        username: "postman",
        password: "password",
        method: "digest",
      },
    }).then((response) => {
      cy.log("Response", response)
      expect(response.status).to.eq(200)
      expect(response.body.authenticated).to.eq(true)
    })
  })

  it("Bearer Token Auth", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
        headers: {
          Authorization: "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",
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.authenticated).to.eq(true)
    })
  })
})
