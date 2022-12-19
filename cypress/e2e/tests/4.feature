Feature: telnyx.com 
  
    Scenario: Checking the ability to read customers stories

        Given I visit telnyx.com
        When I click 'Read customer story'
        Then I shld be switched to the page with customer story
 