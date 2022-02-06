describe('Scenario: Initial load', () => {

    describe('Given the user launches Songbird' + ' When the page is loaded', () => {
        
        // load Songbird running on localhost
        before(() => {
            cy.visit('localhost:4200/')
        })

        it('Then the title of the page is Songbird', () => {
            cy.title().should('eq', 'Songbird')
        })

        it('And the toolbar is displayed', () => {
            cy.get('#toolbar').should('be.visible')
        })

        it('And the search component is displayed', () => {
            cy.get('#search').should('be.visible')
        })

        it('And there are no detected accessibility violations', () => {
            // inject Axe accessibility testing
            cy.injectAxe()
            // test the page at initial load
            cy.checkA11y()
        })
    })
})
