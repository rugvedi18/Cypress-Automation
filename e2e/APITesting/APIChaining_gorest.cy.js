// Obtain the access token by visiting the official gorest.co.in website.
// Navigate to the "Access Token" section, log in using your social account credentials
// Retrieve the access token for authentication purposes.

// Generate a random email address for testing purposes

describe("API Chaining", () => {
  const access_token =
    "Bearer 5d00d18fdfe4a81bd87bd60b4cf11be5583d96fe1aef98b52f91d768942e7ce8"
  const randomEmail = `testuser${Math.floor(
    Math.random() * 100000
  )}@example.com`

  it("Gorest API chaining", () => {
    // create user
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      body: {
        name: "RISHI KAPOOR",
        gender: "male",
        email: randomEmail,
        status: "active",
      },
      headers: {
        Authorization: access_token,
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      const userId = response.body.id
      cy.log("userid", userId)

      // Update user
      cy.request({
        method: "PUT",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        body: {
          name: "updated",
        },
        headers: {
          Authorization: access_token,
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
      })

      // Delete user
      cy.request({
        method: "DELETE",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        headers: {
          Authorization: access_token,
        },
      }).then((response) => {
        expect(response.status).to.eq(204)
      })
    })

    // Get all users
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
