Feature: telnyx.com 
  
    Scenario: A11 - Checking the ability to go to the login page from the sign up page 

        Given I visit telnyx.com
        When I click the button 'Sign up'
        And I click the button 'Log In'
        Then I should be switched to the login page
