const { describe, it } = require("mocha");
describe("Assertion demo", () => {
  it("implicit assertion", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("include", 'orangehrmlive.com' )
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should("contain", 'orangehrm')

    //cy.url().should("include", 'orangehrmlive.com' )
    // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // .should("contain", 'orangehrm')

   //cy.url().should("include", 'orangehrmlive.com' )
    // .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // .and("contain", 'orangehrm')

     cy.url().should("include", 'orangehrmlive.com' )
     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .and("not.contain", 'greenhrm')

     cy.title().should('include','Orange')
     .and('eq', "OrangeHRM")
     .and('contain', "HRM")

     cy.get('.orangehrm-login-logo > img') //logo present or not
      .should('be.visible')
      .should('exist');

      cy.xpath("//a").should('have.length', '5') // number of links

      cy.get("input[placeholder='Username']").type("Admin"); // Provide value into input box
      cy.get("input[placeholder='Username']").should('have.value', 'Admin'); // Check value
      
    
})

it("explicit assertion", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    cy.get("input[placeholder='Username']").type("Admin"); // Provide value into input box
    cy.get("//input[@placeholder='Password']']").type('admin123'); // provide password into input box
    cy.get(" //button[normalize-space()='Login']").click()
    
    let expName="FirstNameTest LastNameTest"
    cy.get(".oxd-userdropdown-name").then(  (x)=> {
      let actName=x.text()
      //BDD style
      expect(actName).to.equal(expName)
      expect(actName).to.not.equal(expName)

      //Tdd style
      assert.equal(actName, expName)
      assert.notAqual(actName, expName)




    })
  
})

})
