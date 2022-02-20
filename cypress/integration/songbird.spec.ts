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

        it('And the search field is displayed', () => {
            cy.get('#search').should('be.visible')
        })

        it('And the search placeholder text is Search for a song or music artist', () => {
            cy.get('#search').invoke('attr', 'placeholder').should('eq', 'Search for a song or music artist')
        })

        it('And the search field is autofocused', () => {
            cy.get('#search').invoke('attr', 'autofocus').should('exist')
        })

        it('And there are no detected accessibility violations', () => {
            // inject Axe accessibility testing
            cy.injectAxe()
            // test the page for accessibility
            cy.checkA11y()
        })
    })
})

describe('Scenario: Searching and receiving results', () => {

    describe('Given the user launches Songbird' + ' When the page is loaded' +
        'And the user enters <Juice WRLD> into the search field ' + 'And the user presses enter (return) on the keyboard', () => {

            // load Songbird running on localhost
            before(() => {
                cy.visit('localhost:4200/')
                cy.get('#search').type('Juice WRLD{enter}')
            })

            it('Then the result cards display', () => {
                cy.get('.results').contains('Juice WRLD')
            })

            it('And there are no detected accessibility violations', () => {
                // inject Axe accessibility testing
                cy.injectAxe()
                // test the page for accessibility
                cy.checkA11y()
            })

            it('When the user clicks on the toolbar' + 'Then the page is reloaded' +
                'And the search placeholder text is Search for a song or music artist' +
                'And there are no detected accessibility violations', () => {
                    cy.get('#toolbar').click()
                    cy.get('#search').invoke('attr', 'placeholder').should('eq', 'Search for a song or music artist')
                    cy.injectAxe()
                    cy.checkA11y()
                })
        })
})

describe('Scenario: Searching with no results found', () => {

    describe('Given the user launches Songbird' + ' When the page is loaded' +
        'And the user enters <huehvrbeu3u4u754848390549> into the search field ' + 'And the user presses enter (return) on the keyboard', () => {

            // load Songbird running on localhost
            before(() => {
                cy.visit('localhost:4200/')
                cy.get('#search').type('huehvrbeu3u4u754848390549{enter}')
            })

            it('Then the result cards display', () => {
                cy.get('#noResultsFound').contains('No results found')
            })

            it('And there are no detected accessibility violations', () => {
                // inject Axe accessibility testing
                cy.injectAxe()
                // test the page for accessibility
                cy.checkA11y()
            })
        })
})