 // Arrow function
 describe('My first test', () => {
    it('verify title-positive', () => {
        // steps
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq', 'OrangeHRM')

    })

    it('verify title-negative', () => {
        // steps
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq', 'OrangeHRM123')

    })
  })
