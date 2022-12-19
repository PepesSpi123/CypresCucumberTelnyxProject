Feature: telnyx.com 
  
    Scenario: Checking the ability to go to the sign up page from the login page 

        Given I visit telnyx.com
        When I click the button 'Log In'
        When I click the button 'Sign Up'
        Then I should be switched to the sign up page
