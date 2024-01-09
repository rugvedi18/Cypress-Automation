// Go to postman for more information Workspace - Cypress API Testing -> Testing -> BooksAPI
describe("API Testing", () => {
  let authToken = null
  before("Creating access token", () => {
    // get token and response will be access token
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/api-clients/",
      headers: { "Content-Type": "application/json" },
      body: {
        clientName: "ABC",
        clientEmail: Math.random().toString(5).substring(2) + "@gmail.com",
      },
    }).then((response) => {
      authToken = response.body.accessToken
    })
  })

  // submit an order and response will be order id
  before("Creating new order", () => {
    // get token and response will be access token
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: {
        bookId: 1,
        customerName: "abcdef",
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.created).to.eq(true)
    })
  })

  //get all orders
  it("fetching the order", () => {
    cy.request({
      method: "GET",
      url: "https://simple-books-api.glitch.me/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      cookies: {
        cookieName: "mycookie",
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
