Feature: Search for a song or music artist and receive results

    Scenario: Initial load
        Given the user launches Songbird
        When the page is loaded
        Then the title of the page is Songbird
        And the toolbar is displayed
        And the toolbar text is 'Songbird'
        And the search field is displayed
        And the search placeholder text is 'Search for a song or music artist'
        And the search field is autofocused
        And there are no detected accessibility violations

    Scenario: Searching and receiving results
        Given the user launches Songbird
        When the page is loaded
        And the user enters <Juice WRLD> into the search field
        And the user presses enter (return) on the keyboard
        Then the result cards for <Juice WRLD> display
        And there are no detected accessibility violations

    Scenario: Searching with no results found
        Given the user launches Songbird
        When the page is loaded
        And the user enters <huehvrbeu3u4u754848390549> into the search field
        And the user presses enter (return) on the keyboard
        Then the text <No results found> displays
        And there are no detected accessibility violations
