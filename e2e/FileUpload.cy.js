// install package - npm install --save-dev cypress-file-upload
import "cypress-file-upload"

describe("File upload", () => {
  it("Single File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile("test1.txt") // first add files into the fixtures folder
    cy.get("#file-submit").click() // click on upload
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!") // validate File upload succesfully msg
  })

  it("File Upload - Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile({
      filePath: "test1.txt",
      fileName: "myfile.txt", // change the file name
    })
    cy.get("#file-submit").click()
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
  })

  it("File Upload - Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#drag-drop-upload").attachFile("test1.txt", {
      // refer official document - https://www.npmjs.com/package/cypress-file-upload
      // cy.get('[data-cy="dropzone"]').attachFile('myfixture.json', { subjectType: 'drag-n-drop' });
      subjectType: "drag-n-drop",
    })
    cy.wait(3000)
    cy.get(".dz-success-mark").should("be.visible", "✔")
  })

  it("Multiple Files Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get("#fileList").contains("No Files Selected").should("be.visible")
    cy.get("#filesToUpload").attachFile(["test1.txt", "test3.jpg", "test4.PDF"])
    cy.get("ul[id='fileList'] li").should("not.have.value", "No Files Selected")
  })

  it.only("File Upload - Shadow Dom", () => {
    // Shadow DOM means DOM contains another DOM - sometimes file upload option is present in the shadow DOM
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    )
    // inspect browse button, you will see #shadow-root (open) as parent, from here all elements are under shadow DOM
    // .smart-browse-input - is present inside the shadow DOM so .attachFile() cannot directly attach files so will use { includeShadowDom: true }
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "test4.PDF"
    )
    // cy.get(".smart-item-name", { includeShadowDom: true }).contains("test1.txt")
    cy.get(".smart-selected-files", { includeShadowDom: true }).should(
      "be.visible"
    )
    cy.get(".smart-upload-all-button", { includeShadowDom: true }).click()
  })
})
