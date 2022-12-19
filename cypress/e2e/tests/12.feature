Feature: telnyx.com 
  
    Scenario: Checking the ability to switch customers' comments

        Given I visit telnyx.com
        When I wait for a 10 seconds
        Then customers' comments should be  switched automatically