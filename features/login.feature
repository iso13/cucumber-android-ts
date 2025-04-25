Feature: Login to Alkami app

  Scenario: Invalid credentials display an error message
    Given I launch the Alkami app
    When I enter invalid credentials
    Then I should see an error message saying "The provided credentials do not match our records. Please try again."