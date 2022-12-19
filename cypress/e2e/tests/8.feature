Feature: telnyx.com 
  
    Scenario: Checking the ability to switch customers' comments

        Given I visit telnyx.com
        When I switch customers coments
        Then I should see the anoter one customers comment

 