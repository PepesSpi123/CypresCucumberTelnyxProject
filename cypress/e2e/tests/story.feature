Feature: telnyx.com 
  
    Scenario: A4 - Checking the ability to read customers stories

        Given I visit telnyx.com
        When I scroll down to the Customer stories
        And I click 'Read customer story'
        Then I shld be switched to the page with customer story
 