describe("Different methods of Post call", () => {
  it("Approach 1 - Hard coded json object", () => {
    // In this approach, you need to manually change the email every time
    const requestBody = {
      tourist_name: "Mike",
      tourist_email: "abc123456@gmail.com",
      tourist_location: "Paris",
    }

    cy.request({
      method: "POST",
      url: "http://restapi.adequateshop.com/api/Tourist",
      body: requestBody,
    })
      // .its("status")
      // .should("eq", 201)
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq("Mike")
        expect(response.body.tourist_email).to.eq("abc123456@gmail.com")
        expect(response.body.tourist_location).to.eq("Paris")
      })
  })

  it("Approach 2 - Dynamically generating json object", () => {
    // In this approach, name and email will generate randomly using javascript method
    const requestBody = {
      tourist_name: Math.random().toString(5).substring(2),
      tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
      tourist_location: "Paris",
    }

    cy.request({
      method: "POST",
      url: "http://restapi.adequateshop.com/api/Tourist",
      body: requestBody,
    })
      // .its("status")
      // .should("eq", 201)
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
        expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
        expect(response.body.tourist_location).to.eq(
          requestBody.tourist_location
        )
      })
  })

  it.only("Approach 3 - using fixtures", () => {
    // In this approach, we will fetch data from fixture json file instead writing in request body
    cy.fixture("tourist-data").then((data) => {
      const requestBody = data

      cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/Tourist",
        body: requestBody,
      }).then((response) => {
        // validating values
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
        expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
        expect(response.body.tourist_location).to.eq(
          requestBody.tourist_location
        )
        // validating properties with values
        // expect(response.body).has.property("tourist_email",requestBody.tourist_email)
        expect(response.body).to.have.property(
          "tourist_email",
          requestBody.tourist_email
        )
      })
    })
  })
})
