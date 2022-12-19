Feature: telnyx.com 
  
    Scenario: Checking the ability to go to the sign up page from 'Switch + Save with Tenlyx' section

        Given I visit telnyx.com
        When I click 'Create a free trial account'
        Then I should be switched to the sign up page
        