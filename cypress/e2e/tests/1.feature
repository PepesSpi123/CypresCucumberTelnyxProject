Feature: telnyx.com
  
  Scenario: Checking that it is possible to see all products by menu

    Given I visit telnyx.com
    When I choose All products in meny
    Then I should be switched to the products page 
 
