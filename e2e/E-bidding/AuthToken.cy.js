// // eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtdzduMjB0cHVnZGg4c2lqZi51cy5hdXRoMC5jb20vIn0..GgDyZfK80L5ULRda.iHYRwKN0O0UK0AlbQmk-MzCrtn89TLcXORS44TR5TLg6XAnLBf5AFxJJGialPq2TQyjNxH4MV10mkNi7kOqK5tHZvJ1VPYKR0svAqW0rUT6tWbadRm6PtDyt05pRQj4stSPlaGVRhwjTCSkyxapXwpmkesYOf-cIqu04znO13RIwEYLy5Aky6qH7j_FnzpWpr--gjeez9JSp8f3F3NQLVP3YSCRl4HnAJU25KsCzhZuIoo3oBAPlUghxOibefk5_GldxLGDIYtuI37m9VY1xYFalia8PVpo2ukVJqDjx_bJa-LAeaaAlHnTh0tmgyCsfJrdinOX81szhGhw0WpN2TXpRm869j0DUipeHvd7rqrykY3REBW6ImH4eJ0LTWlhQWA4zp0zgFS6kTOI.A3z-sxSZLpSQGOwOOGCjug

// // Go to postman for more information Workspace - Cypress API Testing -> Testing -> BooksAPI
// describe("API Testing", () => {
//   let authToken = null
//   it("Creating access token", () => {
//     // get token and response will be access token
//     cy.request({
//       method: "POST",
//       url: "https://dev-w7n20tpugdh8sijf.us.auth0.com/oauth/token",
//       headers: { "Content-Type": "application/json" },
//       body: {
//         grant_type: "password",
//         username: "sharpshooter@gmail.com",
//         password: "Killer99$",
//         audience: "https://dev-w7n20tpugdh8sijf.us.auth0.com/api/v2/",
//         scope: "openid profile email",
//         client_id: "EibMJRAyNu3QNz6tYSs5zdD2AkDw2krD",
//         client_secret:
//           "B_nTJhxLZgBlRNWK_2_zgUSOjAidTHSzEmqLu2X-3DvibC9zoTwn5UhuuXo9GAsJ",
//       },
//     }).then((response) => {
//       authToken = response.body.access_token
//       cy.log("auth token", authToken)
//     })

//     //cy.visit("https://e-bidding-fe.vercel.app/")
//   })

//   // login
//   it.only("sets a cookie", () => {
//     // now you can test your app as if the user is logged in
//     // e.g., visit a protected part of your application
//     cy.visit("https://e-bidding-fe.vercel.app/")

//     cy.get("#username").type("sharpshooter@gmail.com")
//     cy.get("#password").type("Killer99$")
//     cy.get(
//       "button[class='cc0e61092 c24150cbf cb6ae05ba ce8acedbf c7fed92dc']"
//     ).click()

//     //cy.visit("https://e-bidding-fe.vercel.app/")

//     cy.setCookie(
//       "appSession",
//       {
//         path: "/",
//         expires: new Date("2024-01-10T16:37:44.647Z"),
//         domain: "e-bidding-fe.vercel.app",
//         httpOnly: true,
//         secure: true,
//         sameSite: "Lax",
//       }
//     )
//   })
// })

describe("E-bidding", () => {
  it("Auth Login", () => {
    cy.visit("https://e-bidding-fe.vercel.app/")
    cy.get("#username").type("sharpshooter@gmail.com")
    cy.get("#password").type("Killer99$")
    cy.get(
      "button[class='cc0e61092 c24150cbf cb6ae05ba ce8acedbf c7fed92dc']"
    ).click()
    cy.visit("https://e-bidding-fe.vercel.app/")

    cy.request({
      method: "GET",
      url: "https://e-bidding-fe.vercel.app/",
      auth: {
        username: "sharpshooter@gmail.com",
        password: "Killer99$",
      },
    })
  })
})
