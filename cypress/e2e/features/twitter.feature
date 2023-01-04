Feature: telnyx.com 
  
    Scenario: A15 -  Сhecking the functionality of the "LinkedIn" reference on the main page

        Given I visit telnyx.com
        When I scroll down to the footer
        And I click 'Follow on Twitter' 
        Then I should be switched to the Twitter
