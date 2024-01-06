describe("Different methods of Post call", () => {
  it("Approach 1 - Hard coded json object", () => {
    const requestBody = {
      tourist_name: "Mike",
      tourist_email: "abc456@gmail.com",
      tourist_location: "Paris",
    }
    cy.request({
      method: "POST",
      url: "http://restapi.adequateshop.com/api/Tourist",
      body: requestBody,
    })
      .its("status")
      .should("eq", 201)
  })
})
