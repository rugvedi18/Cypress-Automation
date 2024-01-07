describe("Different methods of Post call", () => {
  it("Approach 1 - Hard coded json object", () => {
    const requestBody = {
      tourist_name: "Mike",
      tourist_email: "abc23456@gmail.com",
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
        expect(response.body.tourist_email).to.eq("abc23456@gmail.com")
        expect(response.body.tourist_location).to.eq("Paris")
      })
  })
})
