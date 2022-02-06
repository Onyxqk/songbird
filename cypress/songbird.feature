Feature: Search for a song or music artist and receive results

    Scenario: Initial load
        Given the user launches Songbird
        When the page is loaded
        Then the title of the page is Songbird
        And the toolbar is displayed
        And the toolbar text is 'Songbird'
        And the search component is displayed
        And the search placeholder text is 'Search for a song or music artist'
        And there are no detected accessibility violations