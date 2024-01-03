// cy.request(request type, url, body)

describe("HTTP Requests", () => {
  it("GET Call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200)
  })

  it("POST Call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "Test post",
        body: "This is post call",
        userId: 1,
      },
    })
      .its("status")
      .should("equal", 201)
  })
})
