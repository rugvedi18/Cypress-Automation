describe("Parsing JSON Response", () => {
  it("Parsing simple JSOn response", () => {
    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body[0].id).to.equal(1)
      // expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
      expect(response.body[0].rating.rate).to.equal(3.9)
    })
  })

  it.only("Parsing complex JSOn response", () => {
    let totalPrice = 0
    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      qs: { limit: 5 },
    }).then((response) => {
      expect(response.status).to.equal(200)

      response.body.forEach((element) => {
        totalPrice = totalPrice + element.price
      })
      expect(totalPrice).to.equal(899.23) // for 5 records
    })
  })
})
