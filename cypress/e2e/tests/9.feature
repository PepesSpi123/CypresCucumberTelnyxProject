Feature: telnyx.com 
  
    Scenario: Checking the ability to learn more about API documentation 

        Given I visit telnyx.com
        When I click the button 'Lear more' in API section
        Then I should be switched to the page with API documentation
