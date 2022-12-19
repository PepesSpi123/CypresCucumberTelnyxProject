Feature: telnyx.com 
  
    Scenario: Checking that it is possible to see all products by the main page

        Given I visit telnyx.com
        When I choose Explore our products on the main page
        Then I should be switched to the products page 
 