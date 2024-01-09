// eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtdzduMjB0cHVnZGg4c2lqZi51cy5hdXRoMC5jb20vIn0..GgDyZfK80L5ULRda.iHYRwKN0O0UK0AlbQmk-MzCrtn89TLcXORS44TR5TLg6XAnLBf5AFxJJGialPq2TQyjNxH4MV10mkNi7kOqK5tHZvJ1VPYKR0svAqW0rUT6tWbadRm6PtDyt05pRQj4stSPlaGVRhwjTCSkyxapXwpmkesYOf-cIqu04znO13RIwEYLy5Aky6qH7j_FnzpWpr--gjeez9JSp8f3F3NQLVP3YSCRl4HnAJU25KsCzhZuIoo3oBAPlUghxOibefk5_GldxLGDIYtuI37m9VY1xYFalia8PVpo2ukVJqDjx_bJa-LAeaaAlHnTh0tmgyCsfJrdinOX81szhGhw0WpN2TXpRm869j0DUipeHvd7rqrykY3REBW6ImH4eJ0LTWlhQWA4zp0zgFS6kTOI.A3z-sxSZLpSQGOwOOGCjug

// Go to postman for more information Workspace - Cypress API Testing -> Testing -> BooksAPI
describe("API Testing", () => {
  let authToken = null
  it("Creating access token", () => {
    // get token and response will be access token
    cy.request({
      method: "POST",
      url: "https://dev-w7n20tpugdh8sijf.us.auth0.com/oauth/token",
      headers: { "Content-Type": "application/json" },
      body: {
        grant_type: "password",
        username: "sharpshooter@gmail.com",
        password: "Killer99$",
        audience: "https://dev-w7n20tpugdh8sijf.us.auth0.com/api/v2/",
        scope: "openid profile email",
        client_id: "EibMJRAyNu3QNz6tYSs5zdD2AkDw2krD",
        client_secret:
          "B_nTJhxLZgBlRNWK_2_zgUSOjAidTHSzEmqLu2X-3DvibC9zoTwn5UhuuXo9GAsJ",
      },
    }).then((response) => {
      authToken = response.body.access_token
      cy.log("auth token", authToken)
    })

    //cy.visit("https://e-bidding-fe.vercel.app/")
  })

  // login
  it.only("sets a cookie", () => {
    // now you can test your app as if the user is logged in
    // e.g., visit a protected part of your application
    cy.visit("https://e-bidding-fe.vercel.app/")

    cy.get("#username").type("sharpshooter@gmail.com")
    cy.get("#password").type("Killer99$")
    cy.get(
      "button[class='cc0e61092 c24150cbf cb6ae05ba ce8acedbf c7fed92dc']"
    ).click()

    //cy.visit("https://e-bidding-fe.vercel.app/")

    cy.setCookie(
      "appSession",
      "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwidWF0IjoxNzA0ODE4MjYzLCJpYXQiOjE3MDQ4MTgyNjMsImV4cCI6MTcwNDkwNDY2M30..HHwoxlW4Ev0YsFLf.0J6rpN3TQBu-ZNi76gkNS_yIwRfhGiswMeIGinA_PJ20ryuUNMPcmD-wilOvpcycpqxhIeXhcC-WwTSqQmgg2EeV8h42c3kQ0G-DutGgG8pB7KUMM-UO7c2Q07sV-XiKe3U9EezfmFEforB-7DPa3Uvf7qFn_2XYF5TW0tunJcOuAq6lj7d9iqt_K8RZPCJ7KXEK5c59gSuTuWYphKWegyY-LACHS5wXB1PS3wv0FBMHTdSO41qGIL7TayTRc1lcFKz-A3GfQ0zmDeS77BJrTQK_de749MoPtdri0NpK59yovZecNKgy7N_bXROgYKWarv8b9lO__O90tOM1wbwMzftvtFeYg7ymSNFZKf36wRe5MQIq-W2DVt67aMZMda2ydi0IwQzPp-_FLP5XbFq-hJMurKrbSTYJ0YhFlKKkmy2IWuYDTy3NfVyL18qmED7JEQbgfFdEb-3t1_v1NAKA4gGfzir_NkTAP0RiY3jeEZ2FON7GffhBur7IzH3U699pbxEGo3u_bN7MW1eyfZsq5iOnwhaHWWUve7-vO5GcquwyQwbuJjKTwduyTHVMIZxWPiB5MaoVswkSljsC-zl3hxTvM-OH_0YQi0Sk-XhjVf4upPFQiMy15R-lYCg-sSInN1jOyvQ54Z3CRsK0abi06DALFc7BDRDViPwKYJRp2cYWIXGmGKNVFvIAffKSEXyX8eCBZtSHDRG8SnDisg_s-mB0RreGJGwLucdnwWfXfTNRItsFq16gIZBJ6pp0LKQaYIMBX4AJqBE2eTHq30bGCMtXpAbEr5KNbDi1mGttvHyJ_jVO1HCqmrorWzOtp1e6Q8_nRcTweMrFMl6V8J3-kwMxikenkJXTMCtBv80ztNhn8z7NGRiP4XacYI0BOBvSLxY4AUjBhWP9oRs5S9xQIb0YoEVfOM1QchAsNFpb2ASRkGJsHLFY0N2iYpB5BHRs0oGgfYI6fo-Z_yMUK2j1xefhnBuzLtFibuENv0NZogpdVvNCm8EXoaHzBhCwZvH6ZUChr-MP4k-c7XslOHadURIhMX9fJdWo0icHImUJ8FWmEk1N0kh-Nc-hiqv9n6GPZv6ahGiCA9rbX_fU3uieUww8bxosDzjGXy9njmlrovpAftXxksW5EbETNYNxA0w-YiyE_YwsczDlA12uiuuBnc1idHznmv7HMpYcRYJR8HM06J4A6hrPpb8V7AtV8jIpq7_Kh6pNOjw7tXXVjZld53nwb0YjQcoKNEVAg0zdkZMFLI-MZrvOYmqOaiHvXqvX7qTyLnQZwDs4HM10CwugH2LoQwPr17-e8AQSLMWTtPcGSlLlMhtxtljVscmSBBsv7e9kvaiUUuDsmnqAsop3dnNt6u5jXB4K_2xu7KPn3wp6LJaFe58mfTv3_edEbeyluuYyMKiwegwKH9cX9OJYpIxl7qx3oTB8x5sOtR4udnnj2CklC7NCeTafhgwbZCZGdzBz_XoJTjjE-ub0dbX4dVeV0XoumWUN3Trv0mmLY0gLc9t0shBvHv43jYV-Fsm7ZIEZc6ibSQfW1UHUa8XV4c_IaXmMRyOUPWi_cmIB59j-bW8TBP9n8tYHISpX-Fz7-nW3HNImLYvIffL9ZaS1EJtKCSqwBzrMpdpjyZm4uWSKkRlEQAjUM841NEWYlMG2MhitxIoWjwerGuqr2yMpr4EPRE6JdXazw6s9rBJRKyWUCNRx-4kzj_ZyPA9mH-hqevKzBfm4FciipBkIEr5SI4hvYU8Qg9tiKbtOHl7uklAlFYRtHTpKNdJvBDq8OtGANqwuitMg9d6NSzLz59WwqtMLRAk5XMq5-o04iQ-Y2ST82mJZ-1YthzDwug3alvDumGtQuu6T6VKI1MRwSPoHIf9bVE7zX9flX82KUunu30rHOZJYNPQRdiU1TiVxYSeHoLZXiUjzP8MCgshaPApGxgdDp3MvabrMSw-ZPq8w0g9N5i8Kj_UazLTujeQcthKIgj0ue1ROcGJD102oH0BctSmU1wV5TSztVYxRnQ7iKnyPpGJY3fQ3ZqsapSnlJwJssK_fdTuNJn4a6n4k0ROWuPugzdp3Y2Td_sO8LsEB8xKA0in0hQ-myyJOEh4kQO-AGvVIWT80WVsBMoQh6e3Dy4YrkupAz4090JZc9e28v5R4R4MINgO8qVrcjWahvIWnpFGMHQTNPsF9Ms5UatofM2IY2xr39cZF6Tct-nv0t7am1Le_cZ8p5IhWv8jhBhdoGCFW-RILky6vxYKfnxlQR5uLxwEyBZt11TyGKVV1q9E_eqgtYHBYVJAj9XWzHtY1cY637qS0iONPCd34Vp9NXPYXUYQqc8FaY2TIPfXGCFGfYDRsKiPXUyV30DlPrdTck-hmGB4gvHVLhJ8YlD_dRxpURUm4sdgN8TJnlEDXWsqCKE1qUDRDhZ0-An2QjWIdQtlgx55coupAe3Mrw4XmQramfGrhHb4ioJ9ODQQViG7bLbknhH6fe4FLbjR3guhvn7FE8lvXPRpnSh2zACWN_mFDRpJLTde6yS4Or3doRj1ixJ3e128K4ABSfH80wEznNHBstbs_AeiO5oiWaeu58V9lJAI3S1FeFG9EmAI0taXy3zgCIhqbtCC4yCsrlSrayGBUUfwQSpRKSg9tYm9Pl_clyN_GuynvPu49elBPfRNFJBQhLTZkikjJ5ukb5UgvIc0EkydUvtf0_C1hacvYUAp5uoEXxUwehH0J-ebRgYqxjXxkzhU4yLiqMalMjLKU7linof7VdRIDMUcPxxrFBAMHhGI6hb38OqZ5-OHp_l_krr6YepOFrGUxTJkjNSdD1nG8JYdreXX6pUKytBiwdlZSADpn9ysS8of4y340EkbpzhgnIFfY5v52uCAeJSqh8W0qBKEuZktVPxf2GID7xvDXQ2KeuayqCuNaHq0kjP1D9DuiDot70mj4SOQbRiBEp2ALDjVo4hDfam5q3bte9O3G3UTVbj7m9bOl4aDibFGLacdvWcT7UBByfMv8lrlMyc0_4GBTzfzJGHm3CCjrkHjAd3n72SxXgMTv8U9863lMk8-NtF1dPESwaEJHxEqvKJLGo9QX1fkIMgILXyiFVOr_8faRGbbokIqXFoufharVssCe4PJIonAuAdrDNt87EOV5pjakKlVuge6bMBdaj9dRO4IE0M9qKet1t9UPVOVKFKX8MzcC1OzM3y-z_zihodLnWFNgMiEZ1Ehedk0lSL5809BiOG8D8be5Fi5AaH1c7RrXSR-Y3KLARM0MY1scuDpcz_zPzwlRQJmN9nxQ0-6HgG7pEufgchXkUJ6hI-h5i8oTPBEfTQZQh0wDkNNt0oViZMaNtsOrmTx0pqVsY1ol9jbyVCCx5jLcbclKfi1hagsVsH-gkNYNUA6ASi6GDddmww._SZHRGzrBowJxmZ0JmMt5w",
      {
        path: "/",
        expires: new Date("2024-01-10T16:37:44.647Z"),
        domain: "e-bidding-fe.vercel.app",
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
      }
    )
  })
})
