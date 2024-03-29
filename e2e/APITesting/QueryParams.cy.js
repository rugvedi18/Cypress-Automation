describe("API Testing", () => {
  it("Passing Query Parameters", () => {
    const queryParam = { page: 2 }
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      qs: queryParam,
    }).then((response) => {
      // verify all these validations on postman
      expect(response.status).equal(200)
      expect(response.body.page).to.eq(2)
      expect(response.body.total).equal(12)
      expect(response.body.data).has.length(6)
      expect(response.body.data[0]).have.property("id", 7)
      expect(response.body.data[0]).have.property("first_name", "Michael")
    })
  })
})
