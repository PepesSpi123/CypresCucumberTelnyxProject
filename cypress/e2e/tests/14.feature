Feature: telnyx.com 
  
    Scenario: Checking the ability to go to the sign up page from footer 

        Given I visit telnyx.com
        When I click 'Sign Up' on the footer
        Then I should be switched to the sign up page