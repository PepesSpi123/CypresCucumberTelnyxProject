Feature: telnyx.com 
  
    Scenario: A8 - Checking the ability to switch customers' comments

        Given I visit telnyx.com
        When I scroll down to the customers' comments
        And I use the arrow button
        Then I should see the anoter one customers' comment
    
    Scenario: A12 - Checking the ability to switch customers' comments

        Given I visit telnyx.com
        When I scroll down to the customers' comments
        And I wait for a 10 seconds
        Then customers' comments should be  switched automatically
 