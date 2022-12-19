Feature: telnyx.com 
  
    Scenario: Checking that it is possible to see all products by the footer 

        Given I visit telnyx.com
        When I click All products on footer
        Then I should be switched to the products page 
 