Feature: Login to Alkami app
As a Customer
I want to access my account
So I can get access to my financial information

  Scenario: Enter invalid credentials
    Given I launch the Alkami app
    When I enter invalid credentials
    Then I should see an error message saying "The provided credentials do not match our records. Please try again."