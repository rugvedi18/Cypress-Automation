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

  it.skip("Digest Authentication", () => {
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
    const token = "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"
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.authenticated).to.eq(true)
    })
  })

  it("API Key Auth", () => {
    const APIKey = "04906577addda35ea2294e7c1fe0258c"
    cy.request({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99",
      qs: {
        appid: APIKey,
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
