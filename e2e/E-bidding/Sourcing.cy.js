describe("sourcing", () => {
  it("create auction", () => {
    cy.visit("https://e-bidding-fe.vercel.app/auctions/create")
    cy.get("#username").type("sharpshooter@gmail.com")
    cy.get("#password").type("Killer99$", { sensitive: true })
    cy.get(".ca8d7aabd").click()
    cy.wait(10000)
    // cy.get(".text-5xl")
    //   .should("be.visible")
    //   .and("have.text", "Welcome To ARG Supply Tech")
  })
})
