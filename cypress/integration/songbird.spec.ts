describe('Given the user launches Songbird', () => {
   
    it('Has no detectable accessibility violations on load', () => {
        // Load Songbird running on localhost
        cy.visit('localhost:4200/')
        // Inject Axe accessibility test tool
        cy.injectAxe()
        // Test the page at initial load
        cy.checkA11y()
      })
  })
