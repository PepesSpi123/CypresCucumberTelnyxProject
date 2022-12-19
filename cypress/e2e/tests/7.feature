Feature: telnyx.com 
  
    Scenario: Checking the ability to see how much money will be save up 

        Given I visit telnyx.com
        When I change data in 'Switch+Save' section
        Then the saved up money should be equal to the difference between the two services

 