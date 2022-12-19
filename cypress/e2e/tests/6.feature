Feature: telnyx.com 
  
    Scenario: Checking the ability to change data and look at the current price

        Given I visit telnyx.com
        When I change data in 'Switch+Save' section
        Then the total price should be changed
 