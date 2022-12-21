Feature: telnyx.com 
  
    Scenario: A9 - Checking the ability to learn more about API documentation 

        Given I visit telnyx.com
        When I scroll down to the API section
        And I click the button 'Lear more' in API section
        Then I should be switched to the page with API documentation
