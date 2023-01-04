Feature: telnyx.com 
  
    Scenario: A10 - Checking the ability to go to the sign up page from the login page 

        Given I visit telnyx.com
        When I click the button 'Log In' from the home page
        And I click the button 'Sign Up'
        Then I should be switched to the sign up page

    Scenario: A14 - Checking the ability to go to the sign up page from footer 

        Given I visit telnyx.com
        When I scroll down to the footer
        And I click 'Sign Up' on the footer
        Then I should be switched to the sign up page
    
    Scenario: A13 - Checking the ability to go to the sign up page from 'Switch + Save with Tenlyx' section

        Given I visit telnyx.com
        When I scroll down to the 'Switch + Save with Telnyx' 
        And I click 'Create a free trial account'
        Then I should be switched to the sign up page