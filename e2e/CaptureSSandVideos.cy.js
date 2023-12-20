// after running the testes, go to the screenshots folder to see the images

describe("capture screenshots and videos", () => {
  it("capture screenshots", () => {
    cy.visit("https://demo.opencart.com/")
    // manually run by - npx cypress open
    //cy.screenshot("homepage") // screenshot of homepage
    //cy.get("img[title='Your Store']").screenshot("logo") // screenshot of logo and give name of our choice

    // automatically capturing screenshots of errors, run by - npx cypress run --spec filename
    cy.get("li:nth-child(7) a:nth-child(1)").should("have.text", "Camera") // actual text is Cameras
  })
})
