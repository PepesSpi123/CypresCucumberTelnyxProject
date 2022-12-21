Feature: telnyx.com 

    Scenario: A5 - Checking the ability to change data by slider

        Given I visit telnyx.com
        When I scroll down to the 'Switch + Save with Telnyx' 
        And I click the 'Make outbound calls' slider element 
        And I press the right arrow button
        Then the amount of calls should be changed 
   
    Scenario: A6 - Checking the ability to change data and look at the current price

        Given I visit telnyx.com
        When I scroll down to the 'Switch + Save with Telnyx' 
        And I click 'SMS' button
        And I choose 'Toll-free numbers' radio button
        And I drag 'Send message' 
        Then the total price should be changed

    Scenario: A7 - Checking the ability to see how much money will be save up 

        Given I visit telnyx.com
        When I scroll down to the 'Switch + Save with Telnyx' 
        And I drag 'Make outbound calls' 
        Then the saved up money should be equal to the difference between the two services
    
    Scenario: A13 - Checking the ability to go to the sign up page from 'Switch + Save with Tenlyx' section

        Given I visit telnyx.com
        When I scroll down to the 'Switch + Save with Telnyx' 
        And I click 'Create a free trial account'
        Then I should be switched to the sign up page
        
    