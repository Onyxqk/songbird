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

        it('And the toolbar text is Songbird', () => {
            cy.get('#toolbar').contains('Songbird')
        })

        it('And the search component is displayed', () => {
            cy.get('#search').should('be.visible')
        })

        it('And the search placeholder text is Search for a song or music artist', () => {
            cy.get('#search').invoke('attr', 'placeholder').should('eq', 'Search for a song or music artist')
        })

        it('And there are no detected accessibility violations', () => {
            // inject Axe accessibility testing
            cy.injectAxe()
            // test the page for accessibility
            cy.checkA11y()
        })
    })
})
