// Instructions for generating Client ID, Client Secret, and Auth Code:
// 1. Navigate to GitHub settings -> Developer settings -> OAuth Apps -> New OAuth App.
// 2. Provide the application name and URL, then click on "Register." Save the generated Client ID and Client Secret.
// 3. Open a web browser and visit https://github.com/login/oauth/authorize?client_id={client-id}, replacing {client-id} with your actual Client ID.
// 4. Upon redirection to your specified URL, you will find a parameter "code={some code}", which serves as your Auth Code. Save this code for authentication purposes.

// Instructions for generating Auth Token:
// 1. Utilize the provided client ID, client secret, and code to obtain the authentication token in Postman.
// For e.g https://github.com/login/oauth/access_token?client_id={client id}&client_secret={client secret}&code={auth code}

describe("OAuth2", () => {
  let accessToken
  it("Get OAuth2 access token", () => {
    // get token and response will be access token
    cy.request({
      method: "POST",
      url: "https://github.com/login/oauth/access_token",
      qs: {
        client_id: "77f919dd52ccda516b09",
        client_secret: "228b5a9610028dbe28d47c82b8a0ab8670f05df0",
        code: "7629bca3e6f391925a6e",
      },
    }).then((response) => {
      // access token is in text format, so we have to split it to get exact access token
      // access_token=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&scope=&token_type=bearer
      const params = response.body.split("&")
      accessToken = params[0].split("=")[1]
    })
  })

  it("OAuth2 Request", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[0].id).to.eq(374384709)
    })
  })
})
