Feature: telnyx.com 
  
    Scenario: Checking the ability to  change data by slider

        Given I visit telnyx.com
        When I use slider
        Then the amount of calls should be changed 