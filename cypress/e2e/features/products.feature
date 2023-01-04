Feature: telnyx.com
  
  Scenario: A1 - Checking that it is possible to see all products by menu
    Given I visit telnyx.com
    When I click in the menu button
    And I click button Products
    And I choose All products in meny
    Then I should be switched to the products page 

  Scenario: A2 - Checking that it is possible to see all products by the main page

    Given I visit telnyx.com
    When I scroll down to the products list
    And I choose Explore our products on the main page
    Then I should be switched to the products page 
  
  Scenario: A3 - Checking that it is possible to see all products by the footer 

    Given I visit telnyx.com
    When I scroll down to the footer
    And I click All products on footer
    Then I should be switched to the products page 
 