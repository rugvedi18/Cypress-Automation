// cy.request(request type, url, body)

describe("HTTP Requests", () => {
  // GET
  it("GET method", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200)
  })

  // POST
  it("POST method", () => {
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

  // PUT
  it("PUT method", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "Test PUT",
        body: "This is a PUT call",
        userid: 1,
        id: 1,
      },
    })
      .its("status")
      .should("equal", 200)
  })

  // DELETE
  it("DELETE method", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200)
  })
})
