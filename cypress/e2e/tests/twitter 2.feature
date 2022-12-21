Feature: telnyx.com 
  
    Scenario: A15 -  Check that the site is linked with Twitter

        Given I visit telnyx.com
        When I scroll down to the footer
        And I click 'Follow on Twitter' 
        Then I should be switched to the Twitter