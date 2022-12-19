Feature: telnyx.com 
  
    Scenario: Check that the site is linked with Twitter

        Given I visit telnyx.com
        When I click 'Follow on Twitter' 
        Then I should be switched to the Twitter