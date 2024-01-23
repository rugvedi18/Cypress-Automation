describe("API Chaining", () => {
  // jsonplaceholder
  it(" Get All the Posts - First API", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/",
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        const postid = response.body[0].id
        return postid
      })
      .then((postid) => {
        cy.request({
          method: "GET",
          url: `https://jsonplaceholder.typicode.com/comments?postId=${postid}`,
          // qs: { postId: postid },
        })
      })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(5)
      })
  })
})
