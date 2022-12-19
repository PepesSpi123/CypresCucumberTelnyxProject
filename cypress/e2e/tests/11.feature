Feature: telnyx.com 
  
    Scenario: Checking the ability to go to the login page from the sign up page 

        Given I visit telnyx.com
        When I click the button 'Sign up'
        When I click the button 'Log In'
        Then I should be switched to the login page
